// @ts-ignore
var process = require('process');
// @ts-ignore
var fs = require("fs");
// @ts-ignore
var deobfuscators = require("./deobfuscators");
var userSpecifiedInput = process.argv[2];
var userSpecifiedOutput = process.argv[3];
var userSpecifiedCRay = process.argv[4];
if (userSpecifiedInput) {
    console.log("input " + userSpecifiedInput);
}
if (userSpecifiedOutput) {
    console.log("output " + userSpecifiedOutput);
}
if (userSpecifiedCRay) {
    console.log("cRay " + userSpecifiedCRay);
}
// const inputFile = "./playground.js";
// const outputFile = "./playground.deobf.js";
// const inputFile = userSpecifiedInput || "captcha_v1.js";
// const outputFile = userSpecifiedOutput || "./captcha_v1.deobfuscated.js"
var inputFile = userSpecifiedInput || "challenge.js";
var outputFile = userSpecifiedInput || "./challenge.deobfuscated.js";
var cRay = userSpecifiedCRay || "645035bd4c123f04";
// const inputFile = "hcaptcha.js";
// const outputFile = "./hcaptcha.deobfuscated.js"
// const inputFile = "hcaptcha-challenge.js";
// const outputFile = "./hcaptcha-challenge.deobfuscated.js"
// const inputFile = "hcaptcha-checkbox.js";
// const outputFile = "./hcaptcha-checkbox.deobfuscated.js"
var script = fs.readFileSync(inputFile, "utf8");
var deobfuscated = deobfuscators.v1Challenge(script, cRay);
fs.writeFileSync(outputFile, deobfuscated, { encoding: "utf8" });
