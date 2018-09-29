
var apiKey = "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8";
var queryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=47.614502,-122.329566&radius=500&types=food&name=harbour&key=" + apiKey;
var queryParams = {
    "api-key": "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8"
};

var article = "";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    console.log(response);

})


