const functions = require("firebase-functions");

const express = require("express");

const cors = require("cors");

// eslint-disable-next-line max-len
const stripe = require("stripe")(
  "sk_test_51LBmZ3SBwsYbscQYd3ZzjearEk9GcY7AKFTCxJEvTv8e3bB8LNNiZGNtJUBZkNeVr48YpzNowPhu3nm1xoTyifJS00FATcYux5"
);

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response)=> {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
    // payment_method_types: ["card"],
  });
  
  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
// http://localhost:5001/kashmerch-2f775/us-central1/api

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
