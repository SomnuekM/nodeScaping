### INSTALL

`npm install --save express request cheerio` <br/>
`npm install cors`

```javascript
app.get('/', function(req, res){
    // The scraping magic will happen here
});
app.listen('8080');
console.log('API is running on http://localhost:8080');
module.exports = app;
```

##Request API
`http://localhost:8080/?rank=1`
