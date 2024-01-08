import * as ESTree from "estree";
import {processBlockStatements, splitReturnSeqStatementToExprsArray} from "./processors/block.processor";
// @ts-ignore
const esprima = require("esprima");
// @ts-ignore
const escodegen = require("escodegen");
// @ts-ignore
const estraverse = require("estraverse");

export function deobfuscate(script: string, cRay: string): string {
  let globalArgsCounter = 0;
  let globalVarCounter = 0;
  var $script = esprima.parseScript(script, {
    loc: true
  });

  processBlockStatements($script);

  let rotateInt;
  let strings = [];

// grab obfuscated string names
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "Program") {
        return;
      }

      for (let ix = 0; ix < node.body.length; ix++) {
        const ifStmt = node.body[ix];
        if (ifStmt.type !== "ForStatement") {
          continue;
        }

        const update = ifStmt.update as ESTree.AssignmentExpression;
        if (
          update.type !== "AssignmentExpression"
          || update.right.type !== "CallExpression"
          || update.right.arguments.length !== 1
          || update.right.arguments[0].type !== "MemberExpression"
          || update.right.arguments[0].object.type !== "ArrayExpression"
        ) {
          continue;
        }

        strings = update.right.arguments[0].object.elements.map(e => (e as ESTree.Literal).value as string);
        // node.body.splice(ix, 1);
        // ix--;
      }
    },
  });


  const injectedAtobFnName = "__atob__";
  const injectedAtobFnCode = `
function ${injectedAtobFnName} (i) {
  var buff = Buffer.from(i, "base64");

  return buff.toString("binary");
}
`;

// get global identifier of obfuscated names store
  let idOfObfuscStore: string;
  estraverse.traverse($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "Program") {
        return;
      }

      let forStmt: ESTree.ForStatement;
      for (let ix = 0; ix < node.body.length; ix++) {
        const curr = node.body[ix];
        if (curr.type === "ForStatement") {
          forStmt = curr;
          break;
        }
      }

      if (!forStmt) {
        throw new Error("Can't find encrypted names for loop")
      }

      if (
        forStmt.update.type !== "AssignmentExpression"
        || forStmt.update.left.type !== "MemberExpression"
        || forStmt.update.left.object.type !== "Identifier"
      ) {
        throw new Error("Can't find global identifier of obfuscated names store")
      }

      idOfObfuscStore = forStmt.update.left.object.name;
    }
  });

// get decrypt function
  let decodeFunction: (p: string) => string;
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "Program") {
        return;
      }

      const fnVarDecl = node.body[0];
      if (
        fnVarDecl.type !== "VariableDeclaration"
        || fnVarDecl.declarations[0]?.init.type !== "FunctionExpression"
      ) {
        return;
      }

      const fnExpr: ESTree.FunctionExpression = fnVarDecl.declarations[0].init;

      if (cRay) {

        // inline cRay call
        estraverse.replace(fnExpr, {
          enter: (child: ESTree.Node, childParent) => {
            if (child.type !== "MemberExpression") {
              return;
            }

            if (child.property.type !== "Identifier" || child.property.name !== "cRay") {
              return;
            }

            return {
              type: "Literal",
              value: cRay
            }
          }
        });
      }


      // replace _cf_atob call to nodejs impl
      estraverse.replace(fnExpr, {
        enter: (child: ESTree.Node, childParent) => {
          if (child.type !== "CallExpression") {
            return;
          }

          if (child.callee.type !== "MemberExpression") {
            return;
          }

          const me = child.callee;
          if (me.property.type !== "Identifier" || me.property.name !== "_cf_atob") {
            return;
          }

          const patchedCall: ESTree.CallExpression = {
            type: "CallExpression",
            optional: false,
            callee: {
              type: "Identifier",
              name: injectedAtobFnName
            },
            arguments: child.arguments,
          }

          return patchedCall
        }
      });

      const injectedAtobESTree = esprima.parseScript(injectedAtobFnCode);
      fnExpr.body.body.splice(0, 0, injectedAtobESTree);

      const decodeFnAst: ESTree.ReturnStatement = {
        type: "ReturnStatement",
        argument: {
          type: "CallExpression",
          optional: false,
          callee: JSON.parse(JSON.stringify(fnExpr)),
          arguments: [{type: "Identifier", name: "encoded"}]
        }
      }

      decodeFunction = new Function("encoded", escodegen.generate(decodeFnAst)) as (p: string) => string;
    }
  });

  const deobfuscatedNames = strings.map(decodeFunction);
  console.log(deobfuscatedNames);

// 1. split simple sequence statements (comma separated)
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent) {
      if (node.type !== "BlockStatement") {
        return;
      }

      if (node.body.length !== 1) {
        return;
      }

      const expr = node.body[0];
      if (expr.type !== "ExpressionStatement" || expr.expression.type !== "SequenceExpression") {
        return;
      }

      // return {
      //   type: "Literal", value: "Replaced"
      // };
      //
      return {
        type: "BlockStatement",
        body: expr.expression.expressions/**/.map(s => ({
          type: "ExpressionStatement",
          expression: s
        }))
      }
    },
  });

// 2. convert comma variable declarations to separate statements
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "BlockStatement" || node.body.every(n => n.type !== "VariableDeclaration")) {
        return;
      }
      const body = [];
      for (const c of node.body) {
        if (c.type === "VariableDeclaration" && c.declarations.length > 1) {
          body.push(...c.declarations.map(s => ({
            ...c,
            declarations: [s]
          })));
        } else {
          body.push(c);
        }
      }
      return {
        type: "BlockStatement",
        body
      };
    },
  });

// 3. split return sequence
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "BlockStatement") {
        return;
      }

      const returnStmt = node.body[node.body.length - 1] as ESTree.ReturnStatement;
      if (returnStmt?.type !== "ReturnStatement") {
        return;
      }

      if (returnStmt.argument?.type !== "SequenceExpression") {
        return;
      }

      const body = splitReturnSeqStatementToExprsArray(returnStmt);
      return {
        type: "BlockStatement",
        body: [
          ...node.body.slice(0, -1),
          ...body
        ]
      };
    },
  });

  const globalApis = [];
// 3. unwrap global apis (functions that returns just arrays)
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type === "VariableDeclaration"
        && node.declarations.length === 1
        && node.declarations[0].type === "VariableDeclarator") {
        const decl = node.declarations[0];
        if (decl.init
          && decl.id.type === "Identifier"
          && decl.init.type === "CallExpression"
          && decl.init.callee.type === "FunctionExpression"
          && decl.init.callee.body.type === "BlockStatement"
          && decl.init.callee.body.body[0].type === "ReturnStatement"
          && decl.init.callee.body.body[0].argument.type === "ArrayExpression"
          && decl.init.callee.body.body[0].argument.elements.every(e => e.type === "FunctionExpression")) {
          decl.init = decl.init.callee.body.body[0].argument;
          globalApis.push(decl.id.name);
        }
      }
    }
  });

// 4. replace !0 and !1 to boolean
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type === "UnaryExpression" && node.operator === "!" && node.argument.type === "Literal") {
        if (node.argument.value === 1 || node.argument.value === 0) {
          return {
            type: "Literal",
            value: !node.argument.value
          };
        }
      }
    }
  })

// 5. make cases to have block statement as consequent part
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "SwitchCase") {
        return;
      }

      if (node.consequent.every(e => e.type === "BlockStatement")) {
        return;
      }

      node.consequent = [
        {
          type: "BlockStatement",
          body: [...node.consequent]
        }
      ];
    }
  });


// 5. control flow
  processBlockStatements($script);

  const isNumOrStr = v => typeof v === "string" || typeof v === "number";
// replace idx access to obfuscated names store
  estraverse.replace($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "MemberExpression" || node.object.type !== "Identifier" || node.object.name !== idOfObfuscStore) {
        return;
      }

      if (node.property.type === "Literal" && isNumOrStr(node.property.value)) {
        return {
          type: "Literal",
          value: deobfuscatedNames[node.property.value as any]
        }
      }
      if (
        node.property.type === "BinaryExpression"
        && node.property.left.type === "Literal"
        && node.property.right.type === "Literal"
        && isNumOrStr(node.property.left.value)
        && isNumOrStr(node.property.right.value)
      ) {
        const expr = escodegen.generate(node.property);
        const computedIx = eval(expr);
        if (isNumOrStr(computedIx)) {
          return {
            type: "Literal",
            value: deobfuscatedNames[computedIx]
          }
        }
      }
    }
  });

  processBlockStatements($script);

  return escodegen.generate($script);
}