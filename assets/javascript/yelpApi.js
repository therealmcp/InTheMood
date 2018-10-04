// Creating an AJAX call for the specific zipcode being clicked

// var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=98006";

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

var yelpRestaurants = [];

$("#find-restaurant").on("click", function (event) {
    event.preventDefault(); 
    //grab the input
    console.log('finding restaurants')
    var zipcode = $("#zip-input").val().trim();
    displayRestaurantInfo();
});

// displayMovieInfo function
function displayRestaurantInfo() {
    console.log('HITTING YELP API')
    var restaurant = $(this).attr("data-name");
    var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=98006";
    // Creating an AJAX call

    $.ajax({
        url: myurl,
        headers: {
            'Authorization': 'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
        },
        method: 'GET',
        dataType: 'json',
    }).then(function(data) {
            //var businesses = data;
            for (var i = 0; i < data.businesses.length; i++) {
                yelpRestaurants.push(data.businesses[i]);
                console.log('yelpResult',yelpRestaurants); 
            }
        });
}



// d3.select("body")
//     .transition()
//     .style("color", "red")
//     .style("background-color","brown")
//     .duration(2000);


// d3.select("container")
//     .transition()
//     .style("color", "white")
//     .style("background-color","brown")
//     .duration(2000);




// d3.select(".lead")
//     .transition()
//     .style("font-size", "30px")
//     .delay(4000)
//     .duration(2000);




