var SidePongDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mydancer"></span>');
  this.setPosition();
  this.jump = true;
  this.dance();
};

SidePongDancer.prototype = Object.create(MakeDancer.prototype);
SidePongDancer.prototype.constructor = SidePongDancer;

