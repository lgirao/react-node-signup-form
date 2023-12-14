const signupService = require('../service/signup');

const emailSignup = async (req, res, next) => {
    try {
        console.log(req.body);
        signupService.signup(req.body);
        res.send('User has signed up');
    } catch (e) {
        console.log(e);
    }
}

module.exports = { emailSignup }