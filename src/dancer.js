// Creates and returns a new dancer object that can step
var MakeDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.top = top;
  this.left = left;
  this.hasLinedup = false;
  
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
  this.checkDistance();
};

MakeDancer.prototype.lineup = function(lastLocation) {
  this.hasLinedup = true;
  console.log(this, 'in lineup');
  this.top = lastLocation;
  this.left = 10;  
  this.setPosition();
};

MakeDancer.prototype.checkDistance = function() { //x1,y1, x2,y2
  var inner;
  var distance;
  for (var i = 0; i < window.dancers.length - 1; i++) {
    var x1 = window.dancers[i].top;
    var y1 = window.dancers[i].left;
    var x2 = window.dancers[i + 1].top;
    var y2 = window.dancers[i + 1].left;
    inner = Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
    distance = Math.sqrt(inner);
    if (distance < 200) {
      //make pow
      $('.pow').css('visibility', 'visible');
      setTimeout(function() {
        $('.pow').css({'visibility': 'hidden', 'top': x1, 'left': y1});
      }, 100);
    }
  }
  
};

/*new dancer ideas
  free spirit dancer... floats randomly around screen changing colors
*/

