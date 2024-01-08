import * as ESTree from "estree";

// @ts-ignore
const esprima = require("esprima");
// @ts-ignore
const escodegen = require("escodegen");
// @ts-ignore
const estraverse = require("estraverse");


export function extractPrerenderedCfg(script: string): CloudflareNonInteractiveChallengeConfig {
  var $script = esprima.parseScript(script, {
    loc: true
  });


  let cfg: string;
  estraverse.traverse($script, {
    enter: function (node: ESTree.Node, parent?: ESTree.Node) {
      if (node.type !== "ObjectExpression") {
        return;
      }

      cfg = escodegen.generate({
        type: "ExpressionStatement",
        expression: node
      });
      this.break()
    }
  });

  if (!cfg) {
    throw new Error("Can't find prerendered config")
  }

  return eval(cfg);
}


export interface CloudflareNonInteractiveChallengeConfig {
  cvId: string;
  cType: "non-interactive" | string;
  cNounce: string;
  cRay: string;
  cHash: string;
  cFPWv: string;
  cTTimeMs: string;
  cRq: {
    ru: string;
    ra: string;
    rm: string;
    d: string;
    t: string;
    m: string;
    i1: string;
    i2: string;
    zh: string;
    uh: string;
    hh: string;
  }
}