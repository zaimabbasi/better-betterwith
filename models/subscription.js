const mongoose = require("mongoose");

// Schema
const subscriptionSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    }
});

// Model
const Subscription = mongoose.model("subscription", subscriptionSchema);

module.exports = Subscription;