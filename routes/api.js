const express = require("express");

const router = express.Router();

const Contact = require("../models/contact");
const Request = require("../models/request");
const Subscription = require("../models/subscription");


// Routes
router.get("/blah", (req, res) => {
    const blah = {
        name: "blah",
        age: 2
    }

    res.send(blah);
})

router.get("/contacts", (req, res) => {
    Contact.find((err, contacts) => {
        if (err)    res.send(err);
        else        res.send(contacts);
    });
});

router.post("/request", (req, res) => {
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

router.post("/subscribe", (req, res) => {
    console.log("subscription: ", req.body);

    const newEmail = req.body.email;

    Subscription.find({email: newEmail}, (err, subscriptions) => {
        if (err) {
            res.send(err);
        }
        else {
            if (subscriptions.length) {
                res.send(null);
            }
            else {
                const subscription = new Subscription({
                    email: newEmail
                });
    
                subscription.save((error, subscription) => {
                    if (error) {
                        res.send(error);
                    }
                    else {
                        res.send(subscription);
                    } 
                })
            }
        } 
    });

});

module.exports = router;