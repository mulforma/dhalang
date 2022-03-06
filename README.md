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
     --url 'https://raw.githubusercontent.com/tinvv/dhalang/main/dhalang.min.js?token=GHSAT0AAAAAABRTFWATUAGTLX5RAWRDABTUYROFQLQ'\
     --output './lib'
```
Importing the file
```javascript
import { execute } from "./lib/dhalang.min.js";
console.log(execute("pandha pandha pandha pandadhada"));
```

# Docs
### Print current cell value
Using `pandadhada` instructions will print the ASCII representation of the string.
### Move to next cell
Using `panda` instructions will move the pointer to the next cell.
### Move to previous cell
Using `dapan` instructions will move the pointer to the previous cell.
### Increment current cell value
Using `pandha` instructions will increment the value of the current cell by 1.
### Decrement current cell value
Using `dhapan` instructions will decrement the value of the current cell by 1.
### Loop
To start loop, use `dapandha` instruction follow with amount of times to loop and close loop with `dhapanda` instruction.