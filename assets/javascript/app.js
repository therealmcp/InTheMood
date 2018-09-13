

var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?";
var queryParams = {
    "api-key": "9df305e8e7d4c9a921a401b6d963746"
};

var article = "";

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response) {

    console.log(response);

})