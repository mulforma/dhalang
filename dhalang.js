let run = (code) => {
  let cells = [0];
  let ptr = 0;
  let output = "";
  let instructions = code.split(" ");
  
  let addCells = (i) => {
    i ? ptr ++ : '';
    if (ptr >= cells.length) {
      cells.push(0);
    }
  }
  
  instructions.map((c, i) => {
    switch (c) {
      case "pandadhada":
        output += String.fromCharCode(cells[ptr]);
        break;
      case "panda":
        addCells(1);
        break;
      case "dapan":
        ptr --;
        break;
      case "pandha":
        cells[ptr] ++;
        break;
      case "dhapan":
        cells[ptr] --;
        break;
      case "dapandha":
        let instruction = instructions.slice(i + 2, instructions.slice(i + 2)
          .indexOf("dhapanda") + i + 2);
        for (let j = 0; j < instructions[i + 1] - 1; j ++) {
          let [cl, , ot] = run(instruction.join(" "));
          output += ot;
          cl.map((c, i) => cells[i] += c);
          addCells();
        }
    }
  })
  return [cells, ptr, output];
}

module.exports = run