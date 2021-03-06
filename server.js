const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

require("dotenv/config");

const PORT = process.env.PORT;

const routes = require("./routes/api");

// mongoose
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("Database connected successfully");
    })
    .catch((err) => {
        console.log(err);
    });

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));

    app.get("*", (req, res) => {
        res.sendFile(path.resolve((__dirname, "client/build/index.html")));
    });
}

// start listening to requests
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});