// Creating an AJAX call for the specific zipcode being clicked

var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=98006";

$.ajax({
    url: myurl,
    headers: {
        'Authorization': 'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
    },
    method: 'GET',
    dataType: 'json',
    success: function (data) {
        console.log({
            data
        });
    }
   
});



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




