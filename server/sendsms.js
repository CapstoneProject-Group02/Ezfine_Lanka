const express = require("express");
const bodyParser = require("body-parser");
const twilio = require("twilio");
const cors = require("cors");
const app = express();
const port = 3003;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const accountSid = "AC2d78b0ab262873d0fa0f8d106bee0caf";
const authToken = "215ee493edea118ba883a1201b3c261c";
const client = new twilio(accountSid, authToken);

app.post("/sendSMS", (req, res) => {
  const { phoneNumber, message } = req.body;

  client.messages
    .create({
      body: message,
      from: "+18482855437",
      to: phoneNumber,
    })
    .then((message) => {
      console.log(`SMS sent: ${message.sid}`);
      res.status(200).json({ success: true });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ success: false, error: err.message });
    });

  // if (licenseStatus === "Blocked") {
  //   const blockedMessage = "Your license card is blocked.";
  //   client.messages
  //     .create({
  //       body: blockedMessage,
  //       from: "+14143166709",
  //       to: phoneNumber,
  //     })
  //     .then((message) => {
  //       console.log(`SMS sent: ${message.sid}`);
  //       res.status(200).json({ success: true });
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //       res.status(500).json({ success: false, error: err.message });
  //     });
  // }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
