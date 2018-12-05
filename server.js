const express = require("express");
const path = require("path");

const htmlRoutes = require(".app/routing/htmlRoutes");
const apiRoutes = require(".app/routing/apiRoutes");

const app = express();

const PORT = procress.env.PORT || 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use("/api/", apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function(){
    console.log("Server listening on http://localhost:" + PORT)
});