const express = require("express");
const app = express();


app.set("view engine", "ejs");


app.listen(3000, function() {
  console.log("Listening for requests on port 3000")
})

