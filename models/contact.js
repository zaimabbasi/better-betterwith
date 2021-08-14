const mongoose = require("mongoose");

// Schema
const contactSchema = new mongoose.Schema({
    dept: String,
    name: String,
    email: String
});

// Model
const Contact = mongoose.model("contact", contactSchema);

module.exports = Contact;