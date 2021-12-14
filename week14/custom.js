$("#submit").click(function (e) {
    $("#movieFinder").submit();

})

$("#movieFinder").submit(function (e) {
    findMovie();
    e.preventDefault();
})


function findMovie() {
    // Get the value from the search box
    var searchTitle = $("#mtitle").val();
    if (searchTitle == ""){
        alert("Please enter a key word");
        return;
    }
    console.log("Searching for: " + searchTitle);

    // Setting the parameters and sending to the API
    var url = "https://imdb8.p.rapidapi.com/auto-complete?q=";
    url = url + encodeURIComponent(searchTitle);
    console.log(url);
    // Get request
    fetch(url, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "imdb8.p.rapidapi.com",
                "x-rapidapi-key": "f78ab6d24bmsh3c21503da7024bep14e1cbjsn0fc977b52e64"
            }
        })
        .then(response => {
            var data = response.json()
            console.log(data);
            data.then(
                function (value) {
                    console.log(value);
                    updateResults(value);
                },
                function (error) {
                    alert("error: " + error)
                }
            )
        })
        .catch(err => {
            console.error(err);
        });
}

function updateResults(data) {
    console.log("data: " + JSON.stringify(data.d))
    if (data.d && data.d.length > 0) {
        var resultList = $("#dataResults");
        resultList.empty();

        for (var i = 0; i < data.d.length; i++) {
            var title = data.d[i].l;
            var poster = data.d[i].i.imageUrl;
            var imdbID = data.d[i].id;
            resultList.append("<div class='title imgContainer'><a href='http://www.imdb.com/title/" + imdbID +
                "' target='_blank'/'><img class='poster' src='" + poster + "' alt='" + title +
                "'><div class='transparentShield'><p class='titleText'>" + title + "</p></div></a></div>");
        }
    } else {
        var resultList = $("#dataResults");
        resultList.empty();
        resultList.append("<p class='title warning'>>Please check your title and resubmit your inquery</p>");
    }

}