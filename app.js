const express = require("express");
const app = express();



app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('recipes.ejs')
})

app.post('/',(req, res) => {
  console.log(req.body);
});

app.listen(3000, function() {
  console.log("Listening for requests on port 3000")
})

