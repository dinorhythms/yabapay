const sinon = require('sinon');
const admin = require('firebase-admin');

const config = require("../config/index");
const authMock = require("../mockData/authMock");

const { db, auth } = require('../../config/firebaseAdmin');

const { expect, chai, messages, api, test } = config;
const { signUpSuccess, signUpUsedPhoneNumber } = authMock;

describe("Auth", () => {

	let uid;

	before(() => {
		
  });

	after(async () => {
		test.cleanup();
		await auth.deleteUser(uid);
		await db.collection('users').doc(uid).delete();
		await db.collection('users').doc(uid).collection('wallets').doc('wallet').delete();
		await db.collection('wallets').doc(uid).delete();
	});
	
	describe("SignUp - /auth/signup", () => {

		it("should signup user successfully", done => {
			chai
				.request(api)
				.post("/v1/auth/signup")
				.send(signUpSuccess)
				.set("Content-Type", "application/json")
				.end((err, res) => {
					uid = res.body.data.userId;
					expect(res.status).equal(201);
					done(err);
				});
		});

		it("should show user already exist", done => {
			chai
				.request(api)
				.post("/v1/auth/signup")
				.send(signUpSuccess)
				.set("Content-Type", "application/json")
				.end((err, res) => {
					// console.log(res.body.error)
					expect(res.status).equal(401);
					done(err);
				});
		});

		it("should not allow used phone number", done => {
			chai
				.request(api)
				.post("/v1/auth/signup")
				.send(signUpUsedPhoneNumber)
				.set("Content-Type", "application/json")
				.end((err, res) => {
					expect(res.status).equal(500);
					done(err);
				});
		});

	});
});
