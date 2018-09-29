var chill = ["relaxed", "laid-back", "quiet"]

$("#submit").on("click", function(event) {

    // event.preventDefault() can be used to prevent an event's default behavior.
    // Here, it prevents the submit button from trying to submit a form when clicked
    event.preventDefault();

    // Here we grab the text from the input box
    var mood = $("#mood").val();

    // Here we construct our URL
    var apiKey = "AIzaSyBolUOu_G0aNYs7L3-byaAek4lJmDE3BV8";
    var googleQueryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=" + place + "&radius=500&types=food&key=" + apiKey;;


    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      $("#results").text(JSON.stringify(response));
    }); 