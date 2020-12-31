const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const { response } = require("express");
const stripe = require("stripe")(
  "sk_test_51I4V7GDQkGxodhhLMUaDzgBGlUCFnXANFbvhIu3EMh6yjinnx3OhxcwhX2nzMMjH7KP84hiA3GaPftfNc3LYPYIo001RUXAeml"
);

// App config
const app = express();

// Middleware
app.use(cors({ origin: true }));
app.use(express.json());

// API routes
app.get("/", (req, res) => {
  res.status(200).send("All Clear");
});

app.post("/payments/create", async (req, res) => {
  const total = req.query.total;

  console.log("Payment request recieved: ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // OK - Created
  res.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listener
exports.api = functions.https.onRequest(app);
