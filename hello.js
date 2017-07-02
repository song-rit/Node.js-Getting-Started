// Include Library
var http = require("http");
var MongoClient = require('mongodb').MongoClient;

// Define variable
var url = "mongodb://127.0.0.1:27017/frist_db"

// Connect to database
MongoClient.connect(url, function(err, db) {
    if(err) throw err;

    // Check rownum in table "info"
    db.collection("info").count(function (err, res) {
        if (err) throw err;

        rowNum = res;

        if(rowNum == 0) {

            // Define data
            var myOjb = {name: "Awidcha", major: "Conputer Engineering", msg: "Hello World!"};
            
            // Insert 1 record into table "info"
            db.collection("info").insertOne(myOjb, function(err, res) {
                if(err) throw err;

                console.log("1 record inserted");
            });
        }
    });

    
    console.log("Table created!");
    db.close();
});

http.createServer(function (request, response) {

    // Send the HTTP header
    // HTTP Status: 200 : ok
    //Content Type: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});
    

    MongoClient.connect(url, function(err, db) {
        if(err) throw err;

        // Read 1 record from table "info"
        db.collection("info").findOne({}, function(err, result) {
            if (err) throw err;
                console.log("Send response: " + result.msg)

                 // Send the response body as "Hello World"
                response.end(result.msg);
            db.close();
        });
    });
}).listen(8080);

console.log("Sever running at http://127.0.0.1:8080/");

