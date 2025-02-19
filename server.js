// app.js
const express = require("express");
const path = require("path");
const { createServer } = require("node:http");
const { Server } = require("socket.io");

const app = express();
const port = 3000;
app.use(express.json());

app.use(express.static(path.join(__dirname, "./survey_frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./survey_frontend/dist", "index.html"));
});

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/survey_data", (req, res) => {
  console.log("survey recieved", req.body.selection);
  io.emit("survey_data", req.body.selection);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servers is running on http://localhost:${port}`);
});
