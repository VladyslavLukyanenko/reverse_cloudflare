// @ts-ignore
const process = require('process');
// @ts-ignore
const fs = require("fs");
// @ts-ignore
const deobfuscators = require("./deobfuscators");

const userSpecifiedInput = process.argv[2];
const userSpecifiedOutput = process.argv[3];

if (userSpecifiedInput) {
  console.log("input " + userSpecifiedInput);
}
if (userSpecifiedOutput) {
  console.log("output " + userSpecifiedOutput);
}

// const inputFile = "./playground.js";
// const outputFile = "./playground.deobf.js";
const inputFile = userSpecifiedInput || "captcha_v1.js";
const outputFile = userSpecifiedOutput || "./captcha_v1.deobfuscated.js"

// const inputFile = "hcaptcha.js";
// const outputFile = "./hcaptcha.deobfuscated.js"

// const inputFile = "hcaptcha-challenge.js";
// const outputFile = "./hcaptcha-challenge.deobfuscated.js"

// const inputFile = "hcaptcha-checkbox.js";
// const outputFile = "./hcaptcha-checkbox.deobfuscated.js"

var script = fs.readFileSync(inputFile, "utf8");

const deobfuscated = deobfuscators.v1Main(script);
fs.writeFileSync(outputFile, deobfuscated, {encoding: "utf8"})