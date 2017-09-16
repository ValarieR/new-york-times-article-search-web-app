$(document).ready(function () {


    var apiKey = "ac111be824784291ab6b870a1686d63d";

    var searchTerm = "hillary";

    var numRecords;

    var startYr = 15;

    var endYr = 16;


    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q="
        + searchTerm
        + "&api-key=" + apiKey
        + "&begin_date" + "0101"+startYr
        + "&end_date" + "0101"+endYr
    ;


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