// app.js
const express = require("express");
const path = require("path");
const { createServer } = require("node:http");
const { Server } = require("socket.io");
const OSC = require("osc");

const app = express();
const port = 3001;
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

const oscPort = new OSC.UDPPort({
  localAddress: "0.0.0.0",
  localPort: 0, // auto-assign a random open port for sending
  remoteAddress: "239.255.255.11",
  remotePort: 7900,
  multicastTTL: 2,
});

oscPort.open();
oscPort.on("ready", () => {
  console.log("OSC UDP Port is ready for multicast:");
});

function sendOSC(address, ...args) {
  const msg = {
    address: address,
    args: args,
  };
  console.log("Sending OSC:", address, args);
  oscPort.send(msg);
}

const metaphorCounter = {
  Chipmunk: 0,
  Racoon: 0,
  Clouds: 0,
  SnowDrop: 0,
  Hummingbird: 0,
};

app.post("/survey_data", (req, res) => {
  console.log("survey recieved", req.body.selection);

  jsonData = req.body.selection;
  console.log("jsoncounter", metaphorCounter[jsonData]);
  if (metaphorCounter.hasOwnProperty(jsonData)) {
    console.log("metaphorCounter[jsonData]", metaphorCounter[jsonData]);
    metaphorCounter[jsonData] += 1;
  }

  const address = "/skoda";

  // 2) Pass the entire JSON as a single argument (stringified)
  //const entirePayload = jsonData;

  // 3) Send the OSC message
  sendOSC(address, jsonData, JSON.stringify(metaphorCounter));

  //io.emit("survey_data", req.body.selection);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Servers is running on http://localhost:${port}`);
});
