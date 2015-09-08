var express = require('express')
var url = require('url') ;
var MongoClient = require('mongodb').MongoClient;

MongoClient.initDB = function initDB() {
    var dbconurl = null;
     dbconurl = 'mongodb://localhost:27017/mconnect_staging';
    MongoClient.connect(dbconurl, function(err, database) {
        if (err) {
            throw err;
        } else {
            // db = database;
            exports.database.connection = database;
            console.log("Successfully connected to database");
        }
    });
};


var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
	
  
  response.send('Hello World!')
})

app.listen(app.get('port'), function() {

  console.log("Node app is running at localhost:" + app.get('port'))
})