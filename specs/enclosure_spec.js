var assert = require("assert");
var Dinosaur = require("../dinosaur.js")
var Enclosure = require("../enclosure.js")

describe("Enclosure", function(){

  beforeEach(function(){
    this.dino1 = new Dinosaur("Type1", 2);
    this.dino2 = new Dinosaur("Type1", 2);
    this.dino3 = new Dinosaur("Type2", 3);
    this.dino4 = new Dinosaur("Type2", 3);
    this.enclosure1 = new Enclosure();
  });

  it("should start empty", function(){
    assert.equal(0, this.enclosure1.contents.length)
  });

  it("should be able to add one dinosaur", function(){
    this.enclosure1.add(this.dino1);
    assert.equal(1, this.enclosure1.contents.length)
  });

  it("should be able to add two dinosaurs", function(){
    this.enclosure1.add(this.dino1);
    this.enclosure1.add(this.dino2);
    assert.equal(2, this.enclosure1.contents.length)
  });

  it("should be able to remove one by type", function(){
    this.enclosure1.add(this.dino1);
    this.enclosure1.add(this.dino3);
    this.enclosure1.removeByType("Type1");
    assert.equal(1, this.enclosure1.contents.length)
  });

  it("should be able to remove two by type", function(){
    this.enclosure1.add(this.dino1);
    this.enclosure1.add(this.dino2);
    this.enclosure1.add(this.dino3);
    this.enclosure1.removeByType("Type1");
    assert.equal(1, this.enclosure1.contents.length)
  });

  it("should find frequent breeders", function(){
    this.enclosure1.add(this.dino1);
    this.enclosure1.add(this.dino2);
    this.enclosure1.add(this.dino3);
    this.enclosure1.add(this.dino4);

    assert.equal(2, this.enclosure1.findFeqBreeders())
  });

});