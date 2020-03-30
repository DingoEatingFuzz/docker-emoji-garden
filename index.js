const fs = require("fs");
const tracery = require("tracery-grammar");

const spec = JSON.parse(fs.readFileSync("grammar.json"));
const grammar = tracery.createGrammar(spec);

console.log(grammar.flatten("#origin#"));

if (process.env.KEEP_ALIVE) {
  process.stdin.resume();
}
