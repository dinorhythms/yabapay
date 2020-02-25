const fs = require('fs');
require('../config/env');

const configServiceAccount = require('../config/yabapay-276d5-firebase-adminsdk-ep4jd-8b85b63448');
const testConfigServiceAccount = require('../config/test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2');

const serviceAccountJSON = JSON.stringify(configServiceAccount, null, 2).replace(/\\n/g, "n");
const testServiceAccountJSON = JSON.stringify(testConfigServiceAccount, null, 2).replace(/\\n/g, "n");

const createFile = () => {
  if(!fs.existsSync('./config/test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2.json')) {
    console.log("create test service account file");
    fs.writeFileSync('./config/test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2.json', testServiceAccountJSON)
  }
  if(!fs.existsSync('./config/yabapay-276d5-firebase-adminsdk-ep4jd-8b85b63448.json')) {
    console.log("create service account file");
    fs.writeFileSync('./config/yabapay-276d5-firebase-adminsdk-ep4jd-8b85b63448.json', serviceAccountJSON)
  }
}

module.exports = createFile;

require('make-runnable');