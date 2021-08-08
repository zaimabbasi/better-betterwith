const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv/config");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

// mongoose
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("Database connected successfully");
})
.catch( (err) => {
    console.log(err);
});

const itemSchema = new mongoose.Schema({
    name: String,
    img: String
});

const contactSchema = new mongoose.Schema({
    dept: String,
    name: String,
    email: String
});

const subscriptionSchema = new mongoose.Schema({
    email: String
});

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

const Flavor = mongoose.model("flavor", itemSchema);
const Brand = mongoose.model("brand", itemSchema);
const Contact = mongoose.model("contact", contactSchema);
const Subscription = mongoose.model("subscription", subscriptionSchema);
const Request = mongoose.model("request", requestSchema);

// get /
app.get("/flavors", (req, res) => {
    Flavor.find((err, flavors) => {
        if (err)    res.send(err);
        else        res.send(flavors);
    });
});

app.get("/brands", (req, res) => {
    Brand.find((err, brands) => {
        if (err)    res.send(err);
        else        res.send(brands);
    });
});

app.get("/excluded-ingredients", (req, res) => {
    const excluded = [
        "Canola Oil",
        "Soy Oils",
        "Potassium Sorbate",
        "Sodium Citrate",
        "Propylene Glycol Monostearate",
        "Erythritol",
        "Glycerin",
        "Artificial Flavours",
        "Artificial Colours",
        "Modified Corn Starch",
        "Carob Bean Gum",
        "Locust Bean Gum",
        "Sodium Benzoate",
        "Cellulose Gum",
        "Modified Milk Ingredients",
        "Mono and Diglycerides",
        "Modified Palm Oil"
    ];

    res.send(excluded);
});

app.get("/contacts", (req, res) => {
    Contact.find((err, contacts) => {
        if (err)    res.send(err);
        else        res.send(contacts);
    });
});

app.post("/request", (req, res) => {
    console.log("request has come: ", req.body);

    const request = new Request({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        address1: req.body.address1,
        address2: req.body.address2,
        city: req.body.city,
        state: req.body.state,
        postalCode: req.body.postalCode,
        country: req.body.country,
        subject: req.body.subject,
        message: req.body.message
    });

    request.save((err, request) => {
        if (err) {
            res.send(err);
        }
        else {
            res.send(request);
        }
    });
});

app.post("/subscribe", (req, res) => {
    console.log("subscription: ", req.body);
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});