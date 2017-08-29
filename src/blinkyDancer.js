var MakeBlinkyDancer = function(top, left, timeBetweenSteps) {
  // var oldStep = this.step
  MakeDancer.call(this, top, left, timeBetweenSteps);
  
  this.setPosition();
  this.step();
};

MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);

MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer;

MakeBlinkyDancer.prototype.step = function() {
  
  MakeDancer.prototype.step.call(this);
  this.$node.toggle();
};


