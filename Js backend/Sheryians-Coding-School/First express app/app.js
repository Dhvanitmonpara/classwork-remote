const path = require("path");
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const options = {
    root: path.join(__dirname),
  };
  const homePage = "./page/home.html";
  res.sendFile(homePage, options);
});

app.get("/about", (req, res)=> {
    const options = {
        root: path.join(__dirname)
    }
    const aboutPage = "./page/about.html"
    res.sendFile(aboutPage, options)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
