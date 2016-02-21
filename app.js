var express = require('express');
var app = express();
var fs = require('fs');
var port = process.env.PORT || 3003;

// allow usage of the CSS and JS static files
app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
// serve up the base index.html on the initial page load

    fs.createReadStream(__dirname + '/public/index.html')
    .on('error', function(err, res) {
      if(err) {
        console.log('there was an issue');
      }
    })
    .pipe(res);

});

app.listen(port, function() {
console.log('Server listening at ' + port);
});
