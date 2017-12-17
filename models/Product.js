var mongoose = require("mongoose");

var schema = new mongoose.Schema({
    "id": Number,
    "typech": String,
    "typeeng": String,
    "name": String,
    "image": String,
    "currentprice": Number,
    "marketprice": Number,
    "repertory": Number,
    "date": String,
    "weight": Number,
    "number": String,
    "detail": String
});

module.exports = mongoose.model("Product", schema);