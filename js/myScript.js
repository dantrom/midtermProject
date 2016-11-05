$("document").ready(function() {

$(document).on('click', 'a', function(event) { //
    event.preventDefault();

    $('html body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -70
    }, 650);
    //adapted from http://stackoverflow.com/questions/7717527/smooth-scrolling-when-clicking-an-anchor-link
});
    
});

function initMap() {
  var ucIrvine = {lat: 33.646001, lng: -117.842759};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ucIrvine
  });
  var marker = new google.maps.Marker({
    position: ucIrvine,
    map: map
  });
    //adapted from https://developers.google.com/maps/documentation/javascript/adding-a-google-map#tips_and_trouble-shooting
}