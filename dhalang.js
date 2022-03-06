const printKw = "pandadhada";
const incPtr = "panda";
const decPtr = "dapan";
const incCell = "pandha";
const decCell = "dhapan";
const loopStart = "dapandha";
const loopEnd = "dhapanda";

function run(code) {
  let cells = [0];
  let ptr = 0;
  let output = "";
  let instructions = code.split(" ");

  for (let i = 0; i < instructions.length; i++) {
    let c = instructions[i];
    if (c === printKw) {
      output += String.fromCharCode(cells[ptr]);
    } else if (c === incPtr) {
      ptr += 1;
      if (ptr >= cells.length) {
        cells.push(0);
      }
    } else if (c === decPtr) {
      ptr--;
    } else if (c === incCell) {
      cells[ptr]++;
    } else if (c === decCell) {
      cells[ptr]--;
    } else if (c === loopStart) {
      let instruction = instructions.slice(i + 2, instructions.slice(i + 2).indexOf(loopEnd) + i + 2);
      for (let j = 0; j < instructions[i + 1]; j++) {
        let [cl, pt, ot] = run(instruction.join(" "));
        output += ot;
        for (let k = 0; k < cl.length; k++) {
          cells[k] += cl[k];
        }
        if (ptr >= cells.length) {
          cells.push(0);
        }
      }
    }
  }
  return [cells, ptr, output, instructions];
}

function execute(code) {
  let [,, output] = run(code);
  return output;
}

module.exports = {
  execute,
  run
};