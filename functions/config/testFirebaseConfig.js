const testFirebaseConfig = {
  apiKey: process.env.test_apiKey,
  authDomain: process.env.test_authDomain,
  databaseURL: process.env.test_databaseURL,
  projectId: process.env.test_projectId,
  storageBucket: process.env.test_storageBucket,
  messagingSenderId: process.env.test_messagingSenderId,
  appId: process.env.test_appId,
  measurementId: process.env.test_measurementId
};

module.exports = testFirebaseConfig;