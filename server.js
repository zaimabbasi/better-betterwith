const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");


require("dotenv/config");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());


// mongoose
mongoose.connect(process.env.DB_URI, {useNewUrlParser: true, useUnifiedTopology: true})
.then( () => {
    console.log("Database connected successfully");
})
.catch( (err) => {
    console.log(err);
});


// get /
app.get("/", (req, res) => {
    
    const flavors = [
        {
            id: "1",
            name: "chocolate"
        },
        {
            id: "2",
            name: "vanilla"
        },
        {
            id: "3",
            name: "strawberry"
        }
    ];

    console.log(JSON.stringify(flavors));
    res.json(flavors);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});