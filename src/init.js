$(document).ready(function() {
  window.dancers = [];
//how do we use this array within our dancer?
  
  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position
    
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
    console.log(window.dancers);
    
    
  });
  
  $('.addRainDancerButton').on('click', function(event) {
    var rainMakerFunctionName = $(this).data('dancer-rain-name');

    // get the maker function for the kind of dancer we're supposed to make
    var rainMakerFunction = window[rainMakerFunctionName];

    var randDancer = new RainDancer(
      200,
      50,
      500
    );
    $('body').append(randDancer.$node);
    window.dancers.push(randDancer);
    console.log(window.dancers);
  });
  
  $('.addPongDancerButton').on('click', function(event) {
    var pongMakerFunctionName = $(this).data('dancer-pong-name');

    // get the maker function for the kind of dancer we're supposed to make
    var pongMakerFunction = window[pongMakerFunctionName];

    var pongDancer = new SidePongDancer(
      10,
      300,
      1500
    );
    $('body').append(pongDancer.$node);
    window.dancers.push(pongDancer);
    console.log(window.dancers);
  });
  
  $('.lineup').on('click', function(event) {
    // add lineup button
    // when clicked, loop through each item in dancers to call lineup function
    var lastLocation = 0;
    for (var i = 0; i < window.dancers.length; i++) {
      window.dancers[i].lineup(lastLocation);
      lastLocation += 20;
    }
  });
  
  
 
  
  // dancer on mouse over
  // this, selects each dancer
  
  $(this).on('mouseover', function() {

    //$(this, 'dancer').addClass('enhance');
    $('.dancer:hover').css({'transform': 'scale(1.2)'});
  });
  
  // $(this).on('mouseleave', function() {
  //   //{"background-color": "yellow", "font-size": "200%"}

  //   $('.dancer:hover').css({'transform': 'scale(1)', 'border': '10px solid red'});
  // });
  
  
});

