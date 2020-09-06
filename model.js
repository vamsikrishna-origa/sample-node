var mongoose = require('mongoose');
var schema = mongoose.Schema;

var sample = new schema({
    name: {type: String},
    age: {type: String},
    mobileNumber: {type: String},
    address: {type: String}
});

module.exports = mongoose.model('sample', sample);