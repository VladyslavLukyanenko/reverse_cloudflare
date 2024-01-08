const fs = require("fs");
const path = require("path");
const cheerio = require('cheerio');


const encryption = require("../encryption");
const deobfuscators = require("../deobfuscators");


const sampleNo = "1";

const baseInDir = path.join("..", "samples", sampleNo)
const baseOutDir = path.join("output", sampleNo);

const inputMainName = path.join(baseInDir, "v1.js");
const inputIndexHtml = path.join(baseInDir, "index.html");

const inputChallenge1Name = path.join(baseInDir, "challenge1.encrjs");
const inputChallenge2Name = path.join(baseInDir, "challenge2.encrjs");

fs.mkdirSync(baseOutDir, {recursive: true})

const outputMainName = path.join(baseOutDir, "v1.decrypted.js")
const outputChallenge1Name = path.join(baseOutDir, "challenge1.decrypted.js")
const outputChallenge2Name = path.join(baseOutDir, "challenge2.decrypted.js")

const mainContent = fs.readFileSync(inputMainName, {encoding: "utf8"});
const ch1Content = fs.readFileSync(inputChallenge1Name, {encoding: "utf8"});
const ch2Content = fs.readFileSync(inputChallenge2Name, {encoding: "utf8"});
const htmlContent = fs.readFileSync(inputIndexHtml, {encoding: "utf8"});
const $html = cheerio.load(htmlContent);
const $scripts = $html("script");
const scriptWithConfigContent = $scripts
  .filter((ix, node) => !!node.children.length)
  .map((_, n) => n.children[0].data)[0]

const cfg = deobfuscators.extractPrerenderedCfg(scriptWithConfigContent);
const cRay = cfg.cRay;
const ch1Decoded = encryption.decrypt(ch1Content, cRay);
const ch2Decoded = encryption.decrypt(ch2Content, cRay);

const mainDeobfuscated = deobfuscators.v1Main(mainContent);
const ch1Deobfuscated = deobfuscators.v1Challenge(ch1Decoded, cRay);
const ch2Deobfuscated = deobfuscators.v1Challenge(ch2Decoded, cRay);
fs.writeFileSync(outputMainName, mainDeobfuscated, {encoding: "utf8"});
fs.writeFileSync(outputChallenge1Name, ch1Deobfuscated, {encoding: "utf8"});
fs.writeFileSync(outputChallenge2Name, ch2Deobfuscated, {encoding: "utf8"});