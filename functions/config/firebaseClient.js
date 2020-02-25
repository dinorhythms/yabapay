const firebase = require('firebase/app');
const firebaseConfig = require('./firebaseConfig');
const testFirebaseConfig = require('./testFirebaseConfig');
require('firebase/auth');

const config = JSON.parse(process.env.FIREBASE_CONFIG);

if (config.projectId === 'test-yabapay') {
  firebase.initializeApp(testFirebaseConfig);
} else {
  firebase.initializeApp(firebaseConfig);
}

const clientAuth = firebase.auth();

module.exports = { clientAuth };