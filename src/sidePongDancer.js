var SidePongDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="pongdancer"></span>');
  this.setPosition();
  this.iterations = 0;
  this.pong();
};

SidePongDancer.prototype = Object.create(MakeDancer.prototype);
SidePongDancer.prototype.constructor = SidePongDancer;

SidePongDancer.prototype.pong = function() {
  if (this.hasLinedup) {
    return;
  } else if (this.iterations > 15) {
    this.iterations = 0;
    this.left = 300;
    this.top = 30;
  } 
  this.left += 100;
  this.top += 50;
  this.iterations++;
  
  
  this.$node.animate({left: this.left + 'px', top: this.top + 'px'});
  this.$node.animate({left: '0px', top: this.top + 'px'});
  this.step(this.pong.bind(this));
  
  
  
};