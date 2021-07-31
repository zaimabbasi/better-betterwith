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

const Flavor = mongoose.model("flavor", itemSchema);
const Brand = mongoose.model("brand", itemSchema);



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


const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});