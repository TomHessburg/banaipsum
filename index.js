const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const creatanana = require("./utilnanas/creatanana");

const server = express();

server.use(helmet());
server.use(cors());

server.get("/", (req, res) => {
  res.status(200).json({
    message:
      "Welcome to banaipsum, the worlds greatest banana based lorem ipsum generator. Please send requests to our /getNanas/:ammountOfNanas endpoint to recieve some nana :)"
  });
});

server.get("/getNanas/:ammountOfNanas", (req, res) => {
  const ammountOfNanas = req.params.ammountOfNanas;

  res.status(200).json({ ammountOfNanas: creatanana(ammountOfNanas) });
});

const port = process.env.PORT || 5000;

server.listen(port, () => {
  console.log(`server listening on port:${port}`);
});
