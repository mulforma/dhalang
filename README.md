<div align="center">
  <img src="/logo.svg" width="150px">
  <h1 align="center">
    DhaLang
  </h1>
  <p align="center">
    A completely useless esoteric programming language.
  </p>
</div>

# Installation

Download dhalang in to your computer and import it in your JavaScript or TypeScript project.

Downloading the file

```bash
$ curl --request GET -sL \
     --url 'https://s3.tin-sci.me/dhalang.min.js'\
     --output './lib'
```

Importing the file

```javascript
import run from "./lib/dhalang.min.js";
let [cells, ptr, output] = run("pandha pandha pandha pandadhada");

console.log(output);
```

# Docs

### Returning current cell value

Using `pandadhada` instructions will return the ASCII representation of the string.

```javascript
panda panda // Move to cell 2
pandha // Increment current cell (Which is cell 2) by 1
pandadha // Return the value of cell 2 (ASCII)
```

### Move to next cell

Using `panda` instructions will move the pointer to the next cell.

```javascript
panda panda panda panda // Move to cell 4
```

### Move to previous cell

Using `dapan` instructions will move the pointer to the previous cell.

```javascript
panda panda // Move to cell 2
dapan // Back to cell 1
```

### Increment current cell value

Using `pandha` instructions will increment the value of the current cell by 1.

```javascript
panda panda panda // Move to cell 3
pandha // Increment current cell by 1
```

### Decrement current cell value

Using `dhapan` instructions will decrement the value of the current cell by 1.

```javascript
panda panda panda // Move to cell 3
dhapan // Decrement the value by 1
```

### Loop

To start loop, use `dapandha` instruction follow with amount of times to loop and close loop with `dhapanda`
instruction.

```javascript
panda panda panda // Move to cell 3
dapandha 172 // Start loop 172 times
panda panda panda // Move this local pointer to cell 3
pandha // Increment current cell value by 1
dhapanda // Close loop
pandadhada // Return current cell value
```
