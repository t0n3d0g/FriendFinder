const express = require("express");
const path = require("path");
const app = express();

// Root html
app.get("/", function(req,res) {
    console.log("/root route...");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

// Survey html
app.get("/survey", function(req, res){
    console.log("/Survey route...");
    res.sendFile(path.join(__dirname, "../public/survey.html"));
});

// Catch all
app.get("*", function(req,res) {
    console.log("/other route...");
    res.sendFile(path.join(__dirname, "../public/home.html"));
});

module.exports = app;