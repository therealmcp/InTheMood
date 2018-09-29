


var myurl = "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=Seattle";

$.ajax({
    url: myurl,
    headers: {
     'Authorization':'Bearer gdCapxGnUhlNcpxkkNXxQtkDAfCB8ZjcBDyQ0ZiiY5Ia9xqObyUDHnNgj9L8Kqlit6tBsPcA25nKBpEH9boKwgMwxCvl26f_ZZpVapfnD9B8MxGd5H6bG6OwsQypW3Yx',
 },
    method: 'GET',
    dataType: 'json',
    success: function(data){
        console.log(data);
    }
 }); 








