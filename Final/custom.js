$(document).ready(function(){
    fetch("https://imdb8.p.rapidapi.com/auto-complete?q=game%20of%20thr", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "7883562fbbmshac7d0cf1cb5f607p1ead55jsn0d8d6f80635f"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.error(err);
    })
})


// saman code ///////////////////////////////////////////////////////////////////////////////////

// function findMovie() {
// 	// Get the value from the search box
// 	var searchTitle = $("#title").val();
// 	console.log("Searching for: " + searchTitle);

// 	// Set up the parameters to send to the API
// 	var params = {s: searchTitle, apikey:"7883562fbbmshac7d0cf1cb5f607p1ead55jsn0d8d6f80635f"};

// 	// Use jQuery to make the get request
// 	$.get("https://rapidapi.com/apidojo/api/imdb8/", params, function(data, status){
// 		// For debugging purposes, make a note that we're back
// 		console.log("Results from API:")
// 		console.log(status);
//     	console.log(data);

//     	updateResults(data)
// 	});
// }

// function updateResults(data) {

// 	if (data.Search && data.Search.length > 0) {
// 		var resultList = $("#dataResults");
// 		resultList.empty();

// 		for (var i = 0; i < data.Search.length; i++) {
// 			var title = data.Search[i].Title;
// 			var poster = data.Search[i].Poster;
// 			var imdbID = data.Search[i].imdbID;
// 			resultList.append("<div class='title imgContainer'><a href='http://www.imdb.com/title/" + imdbID
//  + "' target='_blank'/'><img class='poster' src='" + poster + "' alt='" + title + "'><div class='transparentShield'><p class='titleText'>" + title + "</p></div></a></div>");
// 		} 
// 	} else {
// 			var resultList = $("#dataResults");
// 			resultList.empty();
// 			resultList.append("<p class='title warning'>>Please check your title and resubmit your inquery</p>");
// 		}

// }
