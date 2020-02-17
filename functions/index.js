const functions = require('firebase-functions');

const express = require('express');
const trimmer = require('trim-request-body');
const cors = require('cors');

const { https } = functions;

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(trimmer);

app.get('/', (req, res) => {
  res.send('Welcome to Yabapay.com Backend');
})

// Handle routes not found
app.use('*', (req, res) => response(res, 404, 'error', {
  message: 'Not found',
}));

exports.api = https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
