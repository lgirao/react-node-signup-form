const router = require("express").Router();
const userData = require('../controllers/contact_form_controller');
const signup_controller = require('../controllers/signup_controller');

router.route('/user-data').get(userData.getUsers);
router.route('/signup').post(signup_controller.emailSignup);

module.exports = router;