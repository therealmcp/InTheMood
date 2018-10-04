var place
var googRestaurants = [];
var results = [];
var chosenSpot;
var link = "";

$(document).ready(function() {

    $("#no-match").hide();

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

        googRestaurants = response.results;

        function refreshUi(array) {
            chosenSpot = array[Math.floor(Math.random()*array.length)]
            if (chosenSpot == null) {
                $("#no-match").show();
            } else {
                $("#no-match").hide();
                $("#hide-me").show();
                var chosenAddress = chosenSpot.vicinity.split(' ').join('+');
                console.log(chosenAddress);
                link = $("<a>").attr("href",`https://www.google.com/maps/place/${chosenAddress}`).text("Address");
                photo = $("<img src=https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + chosenSpot.photos[0].photo_reference + "&key=" + apiKey + ">")
                $("#link-display", "#image-display", "#review-display", "review-display", "name-display").empty();
                $("#link-display").append(link);
                $("#image-display").append(photo);
                $("#review-display").append(chosenSpot.rating);
                $("#name-display").append(chosenSpot.name);
            }
        };

        var chosenMood = $("#mood").val();
        console.log("you chose ", chosenMood);

        if (chosenMood == "cheap") {
            results = googRestaurants.filter(function(restaurant) {
                return restaurant.price_level < 3;
            });
        } else if (chosenMood == "established") {
            results = googRestaurants.filter(restaurant => {
                return restaurant.rating > 3;
            });
        } else if (chosenMood == "adventurous") {
            results = googRestaurants.filter(restaurant => {
                return restaurant.rating < 2 && restaurant.price_level < 2;
            })
        } 
        
        refreshUi(results);

    })

    });

});
