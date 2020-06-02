const express = require("express");
const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);

mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true }, () => {

console.log("Connection to the database has been established");

app.listen(3000, function() {
  console.log("Listening for requests on port 3000")
});

app.get('/', (req, res) => {
  res.render('recipes.ejs')
})

app.post('/',(req, res) => {
  console.log(req.body);
});

});



