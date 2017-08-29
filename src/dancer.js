// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
};

MakeDancer.prototype.step = function(optional) {
  
  var optional = optional ? optional : this.step.bind(this);
  setTimeout(optional, this.timeBetweenSteps);
};

MakeDancer.prototype.setPosition = function() {
  var styleSettings = {
    top: this.top,
    left: this.left
  };
  this.$node.css(styleSettings);
};

/*new dancer ideas
  free spirit dancer... floats randomly around screen changing colors
*/

