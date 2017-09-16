$(document).ready(function () {


    var apiKey = "ac111be824784291ab6b870a1686d63d";

    var searchTerm = "hillary";

    var numRecords;

    var startYr = 2015;

    var endYr;


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    queryURL += '?' + $.param({
        'api-key': apiKey,
        'q': searchTerm
    });

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


});