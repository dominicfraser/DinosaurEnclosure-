var Enclosure = function(){
  this.contents = [];
}

Enclosure.prototype = {
  add: function(dino){
    this.contents.push(dino);
  },
  removeByType: function(type){
    for (var dino of this.contents){
      if (dino.type === type) {
        var pos = this.contents.indexOf(dino);
        this.contents.splice(pos, 1);
      };

    }
  },
  findFeqBreeders: function(){
    var breeders = 0;
    for (var dino of this.contents){
      if (dino.noOffspring > 2)
        breeders++
    }
    return breeders;
  }
}




module.exports = Enclosure;