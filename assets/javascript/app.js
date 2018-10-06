var place
var googRestaurants = [];
var cheap = [];
var chosenSpot;

$(document).ready(function() {

    // HTML Geolocation function that first asks the user to allow the site permission to access their location
    // returns longitude and latitude data
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
    $("#find-restaurant").on("click", async function(event) {
        var apiKey = "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8";
        var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + place + "&type=restaurant&radius=10000&key=" + apiKey;

       await $.ajax({
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
                // $("#dinner").prepend(chosenSpot.icon);
                };

            selected(cheap);
        })

       //displayRestaurantInfo created in yelpApi.js
        var yelpResturants = await displayRestaurantInfo()

        console.log('YELP Resturants: ', yelpRestaurants)
        console.log('Google Resturaunts: ', googRestaurants)
        // here we use spread syntax 
        var combinedResturants = [...googRestaurants]
        combinedResturants = [...combinedResturants, ...yelpRestaurants]
        //here we use .concat method to combine google and yelp array
        var combinedResturants = googRestaurants.concat(yelpRestaurants)
        console.log('COMBINED RESTAURANTS: ', combinedResturants)

    });
    
});







