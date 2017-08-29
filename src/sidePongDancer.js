var SidePongDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pongdancer"></span>');
  this.setPosition();

  this.pong();
};

SidePongDancer.prototype = Object.create(MakeDancer.prototype);
SidePongDancer.prototype.constructor = SidePongDancer;

SidePongDancer.prototype.pong = function() {
  this.left += 50;
  this.top += 50;
  this.$node.animate({left: this.left + 'px', top: this.top + 'px'});
  this.step(this.pong.bind(this));
};