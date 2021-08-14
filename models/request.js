const mongoose = require("mongoose");

// Schema
const requestSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    address1: String,
    address2: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
    subject: String,
    message: String
});

// Model
const Request = mongoose.model("request", requestSchema);

module.exports = Request;