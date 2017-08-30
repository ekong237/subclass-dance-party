describe('blinkyDancer', function() {

  var blinkyDancer, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    blinkyDancer = new MakeBlinkyDancer(10, 20, timeBetweenSteps);
    window.dancers.push(blinkyDancer);
  });

  it('should have a jQuery $node object', function() {
    expect(blinkyDancer.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node blink', function() {
    sinon.spy(blinkyDancer.$node, 'toggle');
    blinkyDancer.step();
    expect(blinkyDancer.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(blinkyDancer, 'step');
      expect(blinkyDancer.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(blinkyDancer.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(blinkyDancer.step.callCount).to.be.equal(2);
    });
  });
  
  describe('Rain Dancer', function() {
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      rainDancer = new RainDancer(200, 50, 500);
    });
    
    it('should call check distance when position changes', function() {
      sinon.spy(rainDancer, 'checkDistance');
      clock.tick(500);
      expect(rainDancer.checkDistance.callCount).to.be.at.least(1);
    });
  });
  
  describe('Side Pong Dancer', function() {
    beforeEach(function() {
      clock = sinon.useFakeTimers();
      pongDancer = new SidePongDancer(10, 30, 1500);
    });
    it('should animate side pong dancer', function() {
      sinon.spy(pongDancer.$node, 'animate');
      clock.tick(1500);
      expect(pongDancer.$node.animate.called).to.be.true;
    });
  });
});
