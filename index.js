import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

var h1 = "<h1>Enter your name<h1>";

app.get("/", (req, res) => {
  res.render("index.ejs", {
    title: h1,
  });
});

app.post("/submit", (req, res) => {
  var nameLength = req.body["fName"].length + req.body["lName"].length;
  res.render("index.ejs", {numbersOfLetters: nameLength,});
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
