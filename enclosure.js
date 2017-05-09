var Enclosure = function(){
  this.contents = [];
}

Enclosure.prototype = {
  add: function(dino){
    this.contents.push(dino);
  }
}

module.exports = Enclosure;