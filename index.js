const express = require("express");
const mongoose = require("mongoose");

const User = mongoose.model(
  "User",
  new mongoose.Schema({
    name: String,
    lastname: String,
  })
);

const app = express();

mongoose.connect("mongodb://admin:123456@mongodb:27017/miapp?authSource=admin");

app.get("/", async (req, res) => {
  console.log("Read");
  const users = await User.find();
  res.send(users);
});

app.get("/create", async (req, res) => {
  console.log("Create");
  await User.create({ name: "Hola", lastname: "mundo" });
  res.send("Ok");
});

app.listen(3000, () => console.log("Server is listener"));
