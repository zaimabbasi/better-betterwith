const mongoose = require("mongoose");

// Schema
const subscriptionSchema = new mongoose.Schema({
    email: String
});

// Model
const Subscription = mongoose.model("subscription", subscriptionSchema);

module.exports = Subscription;