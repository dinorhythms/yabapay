const admin = require('firebase-admin');
const serviceAccount = require('./yabapay-276d5-firebase-adminsdk-ep4jd-8b85b63448.json');
const testServiceAccount = require('./test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2.json');

const config = JSON.parse(process.env.FIREBASE_CONFIG);

if (config.projectId === 'test-yabapay') {
  admin.initializeApp({
    credential: admin.credential.cert(testServiceAccount),
    databaseURL: 'https://test-yabapay.firebaseio.com'
  })
} else {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://yabapay-276d5.firebaseio.com'
  })
}

const db = admin.firestore();
const auth = admin.auth();

module.exports = { db, auth };