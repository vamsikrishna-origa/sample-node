var express = require('express');
var app = express();
var bodyParser = require('body-parser');
const cors = require("cors");
const mongoose = require("mongoose");
var mongo_uri = "mongodb://vamsi:Try2open@ds023074.mlab.com:23074/orga";
var port = 8000;


app.use(cors());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(require('./routes'));

mongoose.connect(mongo_uri, { useNewUrlParser: true }).then(() => {
    console.log('Database Connection Successfull');
}).catch((err) => {
    console.log(err);
    console.log('Error in connecting database')
});

app.listen(port, function(err) {
    if(err){
        console.log(err);
        console.log('Problem in starting the server');
        return;
    } else {
        console.log('Server is listening to the port', port);
    }
});



