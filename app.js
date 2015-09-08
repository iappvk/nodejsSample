var express = require('express')
var url = require('url');
var MongoClient = require('mongodb').MongoClient;

var dbconurl = 'mongodb://localhost:27017/mconnect_staging';
// var dbconurl = 'mongodb://182.71.230.166:27017/ProjectM_DEV'

MongoClient.connect(dbconurl, function(err, database) {
	if (err) {
		console.log("Faild to init" + err);

		throw err;
	} else {
		// db = database;
		console.log("Successfully connected to database");
		
		var collection = db.collection('test');
  // Find some documents 
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    assert.equal(2, docs.length);
    console.log("Found the following records");
    console.dir(docs);
    callback(docs);
  });
  
  
		// exports.database.connection = database;

	}
});

var app = express()

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {

	response.send('Hello World!')
})

app.listen(app.get('port'), function() {

	console.log("Node app is running at localhost:" + app.get('port'))
})