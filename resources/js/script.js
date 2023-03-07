 $(document).ready(function() {

    $('.js-second-section').waypoint(function(direction) {
        if (direction == "down") {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
 }, {
      offset: '30%'
 });

/*

   $('.animate__animated animate__pulse').waypoint(function(direction) {
       $('.animate__animated animate__pulse').addClass('animate__animated', 'animate__pulse');
   }, {
       offset: '50%'
   });

*/

   $('.js-second-section').waypoint(function(direction) {
    if (direction == "down") {
        $('.second-section').addClass('wp-1');
    } 
  }, {
  offset: '25%'
});

$('.js-third-section').waypoint(function(direction) {
    if (direction == "down") {
        $('.third-section').addClass('wp-2');
    } 
  }, {
  offset: '25%'
});

$('.js-fourth-section').waypoint(function(direction) {
    if (direction == "down") {
        $('.fourth-section').addClass('wp-3');
    } 
  }, {
  offset: '25%'
});

$('.js-last-section').waypoint(function(direction) {
    if (direction == "down") {
        $('.last-section').addClass('wp-4');
    } 
  }, {
  offset: '25%'
});

/*
   $('h1').click(function() {
       $(this).css('color', 'yellow');
   })
*/

 });
