var express = require('express');
var router = express.Router();
var apiUser = require('../controllers/user.controller.api');
router.post('/user/reg', apiUser.postRegister);
router.post('/user/login', apiUser.postLogin);
router.post('/user/getacc', apiUser.getAcc);
module.exports = router;
