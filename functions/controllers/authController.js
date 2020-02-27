const firebaseAdmin = require("../config/firebaseAdmin");
const firebaseClient = require("../config/firebaseClient");
const messages = require("../utils/messages");
const { errorResponse, successResponse } = require("../utils/response");
const { db, auth } = firebaseAdmin;
const { clientAuth } = firebaseClient;

/**
 * @method signUp
 * @param {*} req 
 * @param {*} res 
 * @returns object
 */
const signUp = async (req, res) => {
	try {
		const { email, password, phone } = req.body;
    //Check email existence
		const checkEmail = await checkEmailExist(email, auth);
		if (checkEmail)
			return errorResponse(res,401, 'error', {
				status: "error",
				error: `email ${email} is not available, please check and try again`
			});
    
    //create user
		const authUser = await auth.createUser({
			email,
			password,
			phoneNumber: phone
    });
    
    //Set role
		await auth.setCustomUserClaims(authUser.uid, { role: 'customer' });
		
    //send verification email
		const customToken = await auth.createCustomToken(authUser.uid);
		const user = await clientAuth.signInWithCustomToken(customToken);
		await user.user.sendEmailVerification();
		await clientAuth.signOut();
    
		// Add user to database
		const newUser = {
			userId: authUser.uid,
			email,
			phone,
			firstName: '',
			lastName: '',
			address: '',
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		await db
			.collection("users")
			.doc(authUser.uid)
			.set(newUser);
      
		//initialize user wallet
		const newSubWallet = {
			balance: 0,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		await db
			.collection("users")
			.doc(authUser.uid)
			.collection("wallets")
			.doc('wallet')
			.set(newSubWallet);

		const newWallet = {
			userId: authUser.uid,
			balance: 0,
			createdAt: new Date().toISOString(),
			updatedAt: new Date().toISOString()
		};
		await db
			.collection("wallets")
			.doc(authUser.uid)
      .set(newWallet);
      
		// return response
		return successResponse(res, 201, "success", {
      message: messages.successSignUp,
      email: authUser.email,
      phone: authUser.phoneNumber,
      userId: authUser.uid,
      role: authUser.role,
		});
	} catch (error) {
		return errorResponse(res, 500, "error", error.message);
	}
};

/**
 * @method checkEmailExist
 * @param {*} email 
 * @returns boolean
 */
const checkEmailExist = async (email) => {
	try {
		const checkEmail = await auth.getUserByEmail(email);
    if (checkEmail) return true;
    return false;
	} catch (error) {
		return false;
	}
};

module.exports = { signUp };
