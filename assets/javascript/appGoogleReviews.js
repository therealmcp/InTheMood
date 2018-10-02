var place
var googRestaurants = [];
var cheap = [];
var chosenSpot;

$(document).ready(function() {

    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(showPosition);
        } else { 
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    
    getLocation();

    function showPosition(position) {
        position.coords.latitude + 
        position.coords.longitude;
        var location = position.coords.latitude + "," + position.coords.longitude;
        place = location;
        // console.log(position);
        }

    // When button is clicked
    $("#find-restaurant").on("click", function(event) {
    var apiKey = "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8";
    var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + place + "&type=restaurant&radius=10000&key=" + apiKey;

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {

        console.log(response);
        console.log(response.results[Math.floor(Math.random()*response.results.length)]);


        for (i = 0; i < response.results.length; i++) {
            googRestaurants.push(response.results[i]);
            // console.log("resutls are ", response.results[i]);
            if (googRestaurants[i].price_level < 3) {
                cheap.push(googRestaurants[i]);
            }
        }

        
        function selected(array) {
            var chosenMood = $("#mood").val();
            console.log("you chose ", chosenMood);
            chosenSpot = array[Math.floor(Math.random()*array.length)]
            $("#dinner").prepend(chosenSpot.icon);
            };

        selected(cheap);


    })

    });

});
