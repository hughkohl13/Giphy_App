// create array of giphy searches
var gifs = []

$(document).ready(function() {
    $("#add-gif").on("click", function() {

        // set value of input to userGif
        var  userGif = $("#gif-input").val().trim();
        console.log(userGif);

        var userButton = $("<button>");
        userButton.attr("id", "userButt");
        userButton.attr("value", userGif);
        userButton.text(userGif);
        console.log(userGif);
        
        // push value into gifs array
        gifs.push(userGif);
    
        // append value into buttons view
        $('#buttons-view').append(userButton);
        
        // insert input into API request
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userGif + "&api_key=dc6zaTOxFJmzC&limit=10";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

        console.log(response);
    
        for (var i = 0; i < response.data.length; i++) {
    
            var imageUrl = response.data[i].url;
            // console.log(response.data[i].url);
            console.log(imageUrl);

            // create html img tag stored as catImage
            var userImage = $("<img>");
  
            // set catImage attributes with src and alt 
            userImage.attr("src", response.data[i].url); 
            userImage.attr("alt", "user image");

            console.log(userImage);
            
            $("#gifs-appear-here").append(userImage);
        };

        });
      });

      $("#userButt").on("click", function() {

        // set value of input to userGif
        var  userGif = $(this).val().trim();
        
        // insert input into API request
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + userGif + "&api_key=dc6zaTOxFJmzC&limit=10";
    
        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {

        console.log(response);
    
        for (var i = 0; i < response.data.length; i++) {
    
            var imageUrl = response.data[i].url;

            // create html img tag stored as catImage
            var userImage = $("<img>");
  
            // set catImage attributes with src and alt 
            userImage.attr("src", imageUrl); 
            userImage.attr("alt", "user image");

            // console.log(userImage);
            
            $("#gifs-appear-here").prepend(userImage);
        };
        
        });
      });
});

