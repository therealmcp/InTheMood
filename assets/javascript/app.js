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


// YELP API

// Creating an AJAX call for the specific zipcode being clicked

var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=98006";

// $.ajax({
//     url: myurl,
//     headers: {
//         'Authorization': 'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
//     },
//     method: 'GET',
//     dataType: 'json',
//     success: function (data) {
//         console.log({
//             data
//         });
//     }
   
// });



$("#find-restaurant").on("click", function (event) {
    event.preventDefault();

    //Here we grab the input from the input box
    var zipcode = $("#zipcode-input").val();
    console.log(zipcode);
    myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location="+zipcode;

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
        },
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var businesses = data;
            console.log({
                data
            });
        }       
    });

    // var zipPath = businesses.location.zip_code
});




