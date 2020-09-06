var api = {};
var model = require('./model');
var errorResp = {
    code: 400,
    message: '',
    data: ''
}

var successResp = {
    code: 200,
    message: 'Success',
    data: ''
}

api.insert = function(req, res) {
    var body = req.body;
    var doc = {
        name: body.name,
        age: body.age,
        mobileNumber: body.mobileNumber,
        address: body.address
    }
    model.insertMany(doc).then((resp) => {
        console.log(resp);
        successResp.data = resp;
        res.send(successResp);
    }).catch((err) => {
        console.log(err);
        errorResp.message = err.message;
        errorResp.data = err;
        res.send(errorResp);
    })
};

api.fetch = function(req, res) {
    model.find({}).then((docs) => {
        successResp.data = docs;
        res.send(successResp);
    }).catch((err) => {
        errorResp.message = err.message;
        errorResp.data = err;
        res.send(errorResp);
    })
}


module.exports = api;