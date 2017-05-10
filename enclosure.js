var Enclosure = function(){
  this.contents = [];
}

Enclosure.prototype = {
  add: function(dino){
    this.contents.push(dino);
  },
  removeByType: function(type){
    for (var i = this.contents.length-1; i>=0;i--){
      if (this.contents[i].type === type) {
        this.contents.splice(i, 1);
      };
// have to go backwards as array size is decreasing
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