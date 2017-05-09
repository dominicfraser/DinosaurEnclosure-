var assert = require("assert");
var Dinosaur = require("../dinosaur.js")

describe("Dinosaur", function(){

  beforeEach(function(){
    this.dino = new Dinosaur("Type1", 2)
  });

  it("should have a type", function(){
    assert.equal("Type1", this.dino.type);
  });

  it("should have a no. offspring", function(){
    assert.equal(2, this.dino.noOffspring);
  });

});