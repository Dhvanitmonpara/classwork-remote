const express = require("express");
const app = express();
const mongoose = require("mongoose");
const port = 3000;

mongoose.connect("mongodb://127.0.0.1:27017/timepassIsImportant");
const userSchema = mongoose.Schema({
  username: String,
  city: String,
  age: Number,
});
const userModel = mongoose.model("myCollection", userSchema);

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use((req, res, next) => {
  console.log("hellow");
  next();
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/database", async (req, res) => {
  const userCreate = await userModel.create({
    username: "Harry",
    city: "Ahmedabad",
    age: 30,
  });
  res.send(userCreate);
});

app.get("/profile/:username", (req, res) => {
  const username = req.params.username;
  res.render("profile", { username });
});

app.listen(port, () => {
  console.log(`App is listening to https://localhost:${port}`);
});
