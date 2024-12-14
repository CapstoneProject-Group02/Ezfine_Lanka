const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql");
const app = express();
require("dotenv").config();

const port = 3019;
///3010
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const con = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});


// app.get("/getFineAmount", (req, res) => {
//   const licenseNumber = req.query.licenseNumber;
//   const query = `SELECT fine_amount FROM fines WHERE license_number = '${licenseNumber}' ORDER BY date DESC, id DESC LIMIT 1`;

//   con.query(query, (err, results) => {
//     if (err) {
//       console.error("Error fetching fine amount: ", err);
//       res.status(500).json({ error: "Failed to fetch fine amount." });
//       return;
//     }
//     if (results.length > 0) {
//       res.json(results[0].fine_amount);
//     } else {
//       res.json(0); // Return 0 if no fine amount found
//     }
//   });
// });

app.post("/makePayment", (req, res) => {
  const name = req.body.name;
  const licenseNumber = req.body.licenseNumber;
  const amount = req.body.amount;
  const date = req.body.date;
  // const paid = false; // Initially, set paid status to false

  con.query(
    "INSERT INTO payments (name, licenseNumber, amount, date) VALUES (?, ?, ?, ?)",
    [name, licenseNumber, amount, date],
    (err, result) => {
      if (err) {
        console.error("Error making payment:", err);
        return res.status(500).send({ message: "Error making payment" });
      }
      res.send({ message: "Payment successful" });
    }
  );
});

app.get("/getFineAmount", (req, res) => {
  const { licenseNumber } = req.query;

  con.query(
    "SELECT name, amount, date FROM payments WHERE licenseNumber = ?",
    [licenseNumber],
    (err, result) => {
      if (err) {
        console.error("Error fetching payment history:", err);
        return res
          .status(500)
          .send({ message: "Error fetching payment history" });
      }
      res.status(200).json(result);
    }
  );
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
