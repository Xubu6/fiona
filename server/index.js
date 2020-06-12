const express = require("express");
const bodyParser = require("body-parser");

const port = process.env.PORT || 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const client = require("twilio")(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

// create a GET route
app.get("/express_backend", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});

app.post("/api/messages", (req, res) => {
  res.header("Content-Type", "application/json");
  console.log(req);
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: process.env.INBOUND_PHONE_NUMBER,
      body: req.body.body
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch(err => {
      console.log(err);
      res.send(JSON.stringify({ success: false, error: err }));
    });
});
