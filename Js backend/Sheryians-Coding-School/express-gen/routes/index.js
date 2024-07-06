const express = require("express");
const router = express.Router();
const userModel = require("./users");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/create", async function (req, res, next) {
    const createUser = await userModel.create({
      username: "Harsh",
      name: "Harsh",
      age: 29,
    });
    res.send(createUser);
});

module.exports = router;
