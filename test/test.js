const run = require('../dhalang');
const assert = require('assert');

describe("pandadhada", () => {
  it("should return the cells value", () => {
    let [cl, pt, ot] = run("dapandha 105 pandha pandha dhapanda pandadhada");
    console.log(cl)
    assert.equal(ot, `Ò`);
  });
})

describe("pandha", () => {
  it("should increment the cells value", () => {
    let [cl, pt] = run("pandha pandha pandha");
    assert.equal(cl[pt], 3);
  });
})

describe("dhapan", () => {
  it("should decrement the cells value", () => {
    let [cl, pt] = run("dhapan dhapan dhapan");
    assert.equal(cl[pt], -3);
  });
})

describe("panda", () => {
  it("should move pointer to next cell", () => {
    let [cl, pt] = run("panda panda panda");
    assert.equal(pt, 3);
  })
})

describe("dapan", () => {
  it("should move pointer to previous cell", () => {
    let [cl, pt] = run("dapan dapan dapan pandadhada");
    assert.equal(pt, -3);
  })
})

describe("dapandha", () => {
  it("should enter the loop", () => {
    let [cl, pt, ot] = run("dapandha 100 pandha dhapanda pandadhada")
    assert.equal(pt, 0);
    assert.equal(cl[pt], 100);
    assert.equal(ot, 'd');
  })
})