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
            name: "Cream",
            img: "Cream.6939369f.png"

        },
        {
            id: "2",
            name: "Strawberry",
            img: "Strawberry.6d340779.png"
        },
        {
            id: "3",
            name: "Chocolate",
            img: "Chocolate.12b46eb7.png"
        },
        {
            id: "4",
            name: "Vanilla",
            img: "Vanilla.244c61b4.png"
        },
        {
            id: "5",
            name: "Coffee",
            img: "Coffee.b7dc4292.png"
        },
        {
            id: "6",
            name: "Caramel",
            img: "Caramel.f8d8b422.png"
        }
    ];

    console.log(JSON.stringify(flavors));
    res.json(flavors);
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});