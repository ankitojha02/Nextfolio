const express= require('express');
const authcontrollers = require("../controllers/auth-controller")
const router = express.Router();



router.route('/').get(authcontrollers.home);

router.route('/signup').post(authcontrollers.signup);

router.route('/login').post(authcontrollers.login);

router.route('/contact').post(authcontrollers.contact);

router.route('/create').post(authcontrollers.createPortfolio);

router.route('/dashboard').get(authcontrollers.dashboard);

router.route('/dashboard/:_id').put(authcontrollers.editPortfolio);

router.route('/forgot-password').post(authcontrollers.forgotPassword);

router.route('/reset-password/:token').post(authcontrollers.resetPassword);

module.exports= router;