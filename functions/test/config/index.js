const chai = require('chai');
const chaiHttp = require('chai-http');
const messages = require('../../utils/messages');
require('../../config/env');

const BACKEND_BASE_URL = '/api/v1';
const test = require('firebase-functions-test')({
  apiKey: process.env.TEST_API_KEY,
  authDomain: process.env.TEST_DOMAIN,
  databaseURL: process.env.TEST_DB_URL,
  projectId: "test-yabapay",
}, './test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2.json');

const { api } = require('../../index');

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

module.exports = { api, test, chai, expect, BACKEND_BASE_URL, messages }