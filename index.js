const express = require('express');
const request = require('request');
const cheerio = require('cheerio');
const app = express();
const cors = require('cors');
const port = 8080;

app.get('/', cors(), function(req, res) {
    //web
    let rank = req.query.rank; //get the rank of the song to get
    let url = 'https://www.billboard.com/charts/hot-100';

    // The structure of our request call
    // The first parameter is our URL
    // The callback function takes 3 parameters, an error, response status code and the html
    request(url, function(error, response, html) {

        // First we'll check to make sure no errors occurred when making the request
        if (!error) {

            // Next, we'll utilize the cheerio library on the returned html which will essentially give us jQuery functionality
            var $ = cheerio.load(html);
            var base = 'ol.chart-list__elements li:nth-child(' + rank + ') > button > span.chart-element__information > ';
            var title = $(base + '.chart-element__information__song').html();
            var artist = $(base + '.chart-element__information__artist').html();

            //Json Format
            var json = {
                title: title,
                artist: artist,
                rank: rank,
            };

            //Send the JSON as a response to the client
            res.send(json);
        }
    });



});


app.listen(process.env.PORT || port);
console.log('API is running on http://localhost:' + port);
module.exports = app;