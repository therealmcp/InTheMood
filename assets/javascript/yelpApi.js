
var yelpRestaurants = [];

    //this function creat an ajax call to retrive yelp data and return yelp restaurants
    var displayRestaurantInfo = async function() {
        console.log('FETCHING RESTAURANTS FROM YELP')        
        var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=restaurants&location =98004&latitude=47.61454&longitude=-122.19868";

        // Creating an AJAX call
       await $.ajax({
            url: myurl,
            headers: {
                'Authorization': 'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
            },
            method: 'GET',
            dataType: 'json',
        }).then(function (data) {
            console.log(data.businesses[0])
            for (var i = 0; i < data.businesses.length; i++) {
                yelpRestaurants.push(data.businesses[i]);
                // console.log('yelpResult', yelpRestaurants);
            }
            // yelpRestaurants = data.businesses;
            // return yelpRestaurants;
        })
            // console.log(yelpRestaurants[0])
         return await yelpRestaurants;
    };
    

        // console.log('YELP Resturants: ', yelpRestaurants)
        


