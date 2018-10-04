           // construct the url with parameter values
           var apikey = "png3faunycpgqmqspytjkzxe";
           var baseUrl = "http://data.tmsapi.com/v1.1";
           var showtimesUrl = baseUrl + '/movies/showings';
           var zipCode = {};
           var d = new Date();
           var today = d.getFullYear() + '-' + (d.getMonth()+1) + '-' + d.getDate();
          
           var movieArray = [];
           var comedy = [];
           var action = [];
           var documentary = [];
           var chosenSpot;


            $("#find-restaurant").on("click", function(event) {
            event.preventDefault();
            var zipCode = $("#zip-input").val();

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
            var movieArray =  [];

           // callback to handle the results
           function dataHandler(data) {

             data.forEach(function(movie){    
                
                console.log(movie);

                var tBody = $("tbody");
                var tRow = $("<tr>");
                var titleTd = $("<td>").text(movie.title);
                var yearTd = $("<td>").text(movie.shortDescription);

                var movietimes = [] // array to store showtimes from response object
                
                movie.showtimes.forEach(element => {
                    movietimes.push(element.dateTime)
                });

                var showtimeTd = $("<td>").text(movietimes[0]);

                var locations = []
                
                movie.showtimes.forEach(element => {
                    locations.push(element.theatre.name)
                });

                var theatreTd = $("<td>").text(locations[0]);
                
                tRow.append(titleTd, yearTd, showtimeTd, theatreTd);
                tBody.append(tRow);


                
                        //    console.log(movie.title);
                        //    console.log(movie.shortDescription);
                        //    console.log(movie.showtimes[0].dateTime);
                        //    console.log(movie.showtimes[0].theatre.name);
                        //    console.log(movie.genres);
                        //    console.log(movie.name);
                        //    console.log(movietimes);
                        //    console.log(locations);
                            
                        
                         // console.log(data);
                        $("#hide-me").show();

                        // new code
                        
                        /* console.log(movie.genres.indexOf('Comedy')); */
                        if (movie.genres.indexOf('Comedy') != -1) {
                            comedy.push(movie);
                        }
                        console.log(comedy);

                        if (movie.genres.indexOf('Action') != -1) {
                            action.push(movie);
                        }

                        console.log(action)

                        if (movie.genres.indexOf('Documentary') != -1) {
                            documentary.push(movie);
                        }

                        console.log(documentary)

                        var chosenMood = $("#mood").val();

                        if(chosenMood.toLowerCase() === 'adventurous'){
                            // return all action movies
                            if(movie.genres.indexOf('Action')){
                                // push this movie into our results array to display to the user
                            }
                        }
                        // else if 


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




        };

        // Step 1. ConsoleLog Genre
        // Step 2. Explore .val method
        // Step 3. Check API calls