const { signUp } = require('../../controllers/authController');

const authRoutes = (router) => {
  router.route('/auth/signup')
  /**
   * @swagger
   * components:
   *  schemas:
   *    User:
   *      properties:
   *        email:
   *          type: string
   *        password:
   *          type: string
   *        firstName:
   *          type: string
   *        lastName:
   *         type: string
   *        phoneNo:
   *          type: string
   */

   /**
     * @swagger
     * /api/v1/auth/signup:
     *   post:
     *     tags:
     *       - Users
     *     description: Create a new user account
     *     produces:
     *       - application/json
     *     requestBody:
     *      description: User data object
     *      required: true
     *      content:
     *       application/json:
     *          schema:
     *            $ref: '#/components/schemas/User'
     *     responses:
     *       200:
     *         description: User created successfully
     *       500:
     *         description: Internal Server error
     */
    .post(signUp)
}

module.exports = authRoutes;
