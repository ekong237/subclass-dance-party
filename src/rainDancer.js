var RainDancer = function(top, left, timeBetweenSteps) {
  
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="mydancer"></span>');
  this.setPosition();
  this.jump = true;
  this.iterations = 0;
  this.dance();
};

RainDancer.prototype = Object.create(MakeDancer.prototype);
RainDancer.prototype.constructor = RainDancer;

RainDancer.prototype.dance = function() {
  if (this.hasLinedup) {
    return;
  }
  if (this.iterations > 20) {
    this.iterations = 0;
    this.left = 50;
    this.top = 250;
  }
  
    
  if (this.jump) {
    this.top += 300;
    this.jump = false;
  } else {
    this.top -= 300;
    this.jump = true;
  }
  this.iterations++;
  
  this.left += 50;
  this.setPosition();
  this.step(this.dance.bind(this));
};

