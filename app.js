$(document).ready(function () {


    var apiKey = "ac111be824784291ab6b870a1686d63d";

    var searchTerm;

    var numRecords = 10;

    var startYr;

    var endYr;


    $(".btn").click(function () {

        // Stop screen from refreshing
        event.preventDefault();
        // Debug: See if on click ran
        console.log("On click");

        //Set search values
        searchTerm =  document.getElementById("search-term").value;
        //numRecords =  document.getElementById("num-records").value;
        startYr =  document.getElementById("begin-year").value;
        endYr =  document.getElementById("end-year").value;

        console.log(searchTerm);
       // console.log(numRecords);
        console.log(startYr);
        console.log(endYr);


        var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        queryURL += '?' + $.param({
            'api-key': apiKey
        });

        if (searchTerm !== '') {
            queryURL += '&' + $.param({
                'q': searchTerm
            });
        }

        if (startYr > 0) {
            queryURL += '&' + $.param({
                'begin_date': startYr + "0101"
            });
        }
        if (endYr > 0) {
            queryURL += '&' + $.param({
                'end_date': endYr + "1231"
            });
        }

        console.log(queryURL);

        $.ajax({
            url: queryURL,
            method: 'GET'
        }).done(function (retrivedData) {

            console.log(retrivedData);

            console.log(retrivedData.response.docs[0].headline.main);

            console.log(retrivedData.response.docs[0].byline.original);

            console.log(retrivedData.response.docs[0].pub_date);

            console.log(retrivedData.response.docs[0].web_url);

        })

    })


});