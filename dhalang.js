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
      if (ptr < 0) {
        ptr = 0;
      }
    } else if (c === incCell) {
      cells[ptr]++;
    } else if (c === decCell) {
      cells[ptr]--;
    } else if (c === loopStart) {
      let times = instructions[i + 1];
      let start = i + 2;
      if (instructions.slice(start).indexOf(loopEnd) === -1) {
        throw new Error("Unclosed loop");
      }
      let end = instructions.slice(start).indexOf(loopEnd) + start;
      let instruction = instructions.slice(start, end);
      for (let j = 0; j < times; j++) {
        let [cl, pt, ot] = run(instruction.join(" "));
        if (ot) {
          output += ot;
        }
        for (let k = 0; k < cl.length; k++) {
          cells[k] += cl[k];
        }
        ptr += pt;
        if (ptr >= cells.length) {
          cells.push(0);
        }
      }
    }
  }
  return [cells, ptr, output, instructions];
}

console.log(run("dapandha 117 pandha dhapanda pandadhada")[2]);
