const express = require("express");
const app = express();
const dotenv = require('dotenv');
const Recipe = require("./models/Recipe");
dotenv.config();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use('/static', express.static('public'));

const mongoose = require("mongoose");

mongoose.set("useFindAndModify", false);


mongoose.connect(process.env.CONNECTION, { useNewUrlParser: true }, () => {  
  console.log("Connection to the database has been established");

app.listen(3000, function() {
  console.log("Listening for requests on port 3000")
});

app.get('/', (req, res) => {
  Recipe.find({}, (err, recipes) => {
  res.render('recipes.ejs', { recipesToAdd: recipes});
});
});


app.post('/', async (req, res) => {
   const recipe = new Recipe({
      content: req.body.content
    });
    try {
      await recipe.save();
      console.log(content)
        res.redirect("/");
        } catch (err) {
        res.redirect("/");
        }
    });
});

app.route("/edit/:id")
  .get((req, res) => {
    const id = req.params.id;
    Recipe.find({}, (err, recipes) => {
      res.render("edit.ejs", { recipesToAdd: recipes, idRecipe: id});
    });   
})
  .post((req, res) => {
  const id = req.params.id;
  Recipe.findByIdAndUpdate(id, { content: req.body.content }, err => {
    if (err) return res.send(500, err);
    res.redirect('/');
  });
  });

app.route("/remove/:id").get((req, res) => {
  const id = req.params.id;
  Recipe.findByIdAndRemove(id, err => {
  if (err) return res.send(500, err);
  res.redirect("/");
  });
});





