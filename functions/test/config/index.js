const chai = require("chai");
const chaiHttp = require("chai-http");
const messages = require("../../utils/messages");
require('../../config/env');
const testFirebaseConfig = require("../../config/testFirebaseConfig");

const BACKEND_BASE_URL = "/api/v1";

const test = require("firebase-functions-test")(
	testFirebaseConfig,
	"../../config/test-yabapay-firebase-adminsdk-9fu5r-d7917b13f2.json"
);

const { api }= require('../../index');

const { expect } = chai;

chai.use(chaiHttp);
chai.should();

module.exports = { chai, expect, BACKEND_BASE_URL, messages, api, test };
