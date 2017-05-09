var assert = require("assert");
var Dinosaur = require("../dinosaur.js")
var Enclosure = require("../enclosure.js")

describe("Enclosure", function(){

  beforeEach(function(){
    this.dino1 = new Dinosaur("Type1", 2)
    this.dino2 = new Dinosaur("Type1", 2)
    this.dino3 = new Dinosaur("Type2", 3)
    this.enclosure1 = new Enclosure();
  });

  it("should start empty", function(){
    assert.equal(0, this.enclosure1.contents.length)
  })

  it("should be able to add one dinosaur", function(){
    this.enclosure1.add(this.dino1);
    assert.equal(1, this.enclosure1.contents.length)
  })

});