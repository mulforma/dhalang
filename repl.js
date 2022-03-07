const run = require("./dhalang.min");
const prompt = require("prompt-sync")();

while (true) {
  let input = prompt(">> ");
  if (input === "exit") {
    break;
  }
  let [cl, pt, ot] = run(input);
  console.log(ot)
}