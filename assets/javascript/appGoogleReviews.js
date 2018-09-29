var place

$(document).ready(function() {

    // var x = document.getElementById("demo");


    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
    getLocation();

    console.log(place);

    function showPosition(position) {
        position.coords.latitude + 
        position.coords.longitude;
        var location = position.coords.latitude + "," + position.coords.longitude;
        place = location;
        console.log(position);
        // return location;
        }

    // location = showPosition();

    console.log("location will be " + location);

    $("#submit").on("click", function(event) {

    var apiKey = "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + place + "&radius=500&types=food&key=" + apiKey;
    // var queryURL = "https://cors-anywhere.herokuapp.com/https://www.google.com/maps/search/json?api=1&q=90210"
    var queryParams = {
        "api-key": "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8"
    };

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);

        })

    })

});
