// app.js
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static(path.join(__dirname, "./survey_frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./survey_frontend/dist", "index.html"));
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/survey_data", (req, res) => {
  console.log("survey recieved", req.body.selection);
});

app.listen(port, () => {
  console.log(`Servers is running on http://localhost:${port}`);
});
