// construct the url with parameter values
          var apikey = "png3faunycpgqmqspytjkzxe";
          var baseUrl = "http://data.tmsapi.com/v1.1";
          var showtimesUrl = baseUrl + '/movies/showings';
          var zipCode = {};
          var d = new Date();
          var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();

          var movieArray = [];
          var comedy = [];
          /* var chosenSpot; */


           $("#find-restaurant").on("click", function(event) {
           event.preventDefault();
           var zipCode = $("#zip-input").val();

          /*  $("#movie").empty(); */
          
           // $("#hide-me").show();

            $.ajax({
             url: showtimesUrl,
                 data: { startDate: today,
                     zip: zipCode,
                     jsonp: "dataHandler",
                     api_key: apikey
                    },
             dataType: "jsonp",
            })
          });
           

          // callback to handle the results
          function dataHandler(data) {

            var movieArray =  [];
        

            data.forEach(function(movie){

                var chosenGenre = $("#genre").val();

                       console.log("you chose ", chosenGenre);

                       
                        if(chosenGenre.toLowerCase() === 'thrilling'){
                            // return all action movies
                            if(typeof(movie.genres) != 'undefined' && movie.genres.indexOf('Action') != -1){
                                // push this movie into our results array to display to the user
                                movieArray.push(movie);
                            }
                        } else if (chosenGenre.toLowerCase() === 'funny') {
                            if(typeof(movie.genres) != 'undefined' && movie.genres.indexOf('Comedy') != -1) {
                                movieArray.push(movie);
                            }
                        } else if (chosenGenre.toLowerCase() === 'thoughtful') {
                            if (typeof(movie.genres) != 'undefined' && movie.genres.indexOf('Documentary') != -1){
                                movieArray.push(movie);
                            }
                        }

                        console.log(movieArray);

               /* console.log(movie); */

               
                       //    console.log(movie.title);
                       //    console.log(movie.shortDescription);
                       //    console.log(movie.showtimes[0].dateTime);
                       //    console.log(movie.showtimes[0].theatre.name);
                       //    console.log(movie.genres);
                       //    console.log(movie.name);
                       //    console.log(movietimes);
                       //    console.log(locations);

                      
                        // console.log(data);
                       $("#hide-me2").show();

                       // new code
/* 
                       console.log(movie.genres.indexOf('Comedy'));
                       if (movie.genres.indexOf('Comedy') != -1) {
                           comedy.push(movie);
                       }
                       console.log(comedy); */



                       // for (i = 0; i < movie.length; i++) {

                       //    // movieArray.push(movie[i]);
                       //     // console.log("resutls are ", response.results[i]);
                       //     // if (movieArray[i].genres === "Comedy") {
                       //     //     comedy.push(movieArray[i]);
                       //     // }
                       // }
                       //console.log(Comedy);
                   })

                       // function selected(array) {
                       //     var chosenMood = $("#mood").val();
                       //     console.log("you chose ", chosenMood);
                       //     chosenSpot = array[Math.floor(Math.random()*array.length)]
                       //     $("#dinner").prepend(chosenSpot.icon);
                       //     };
            
                       // selected(comedy);


                    for (i = 0; i<movieArray.length; i++){
                       var tBody = $("tbody");
                       var tRow = $("<tr>");
                       var titleTd = $("<td>").text(movieArray[i].title);
                       var yearTd = $("<td>").text(movieArray[i].shortDescription);
        
                       var movietimes = [] // array to store showtimes from response object
        
                       movieArray[i].showtimes.forEach(element => {
                           movietimes.push(element.dateTime)
                       });
        
                       var showtimeTd = $("<td>").text(movietimes[0]);
        
                       var locations = []
        
                       movieArray[i].showtimes.forEach(element => {
                           locations.push(element.theatre.name)
                       });
        
                       var theatreTd = $("<td>").text(locations[0]);
                       
                       tRow.append(titleTd, yearTd, showtimeTd, theatreTd);
                       tBody.append(tRow);
                    }


       };

       // Step 1. ConsoleLog Genre
       // Step 2. Explore .val method
       // Step 3. Check API calls