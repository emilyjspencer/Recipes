const express = require("express");
const app = express();


app.set("view engine", "ejs");


app.get('/', (req, res) => {
  res.render('recipes.ejs')
})

app.listen(3000, function() {
  console.log("Listening for requests on port 3000")
})

