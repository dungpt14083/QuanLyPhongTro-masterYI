var diennuocController = require('../controllers/diennuoc.controller');
var express = require('express');
var router = express.Router();
const diennuocMiddleware = require('../middleware/auth.midddleware');
router.get('/list',diennuocMiddleware.LoginRequire, diennuocController.getListDN);
router.get('/add',diennuocMiddleware.LoginRequire, diennuocController.getAddDN);
router.post('/add',diennuocMiddleware.LoginRequire, diennuocController.postAddDN);
router.get('/edit:id',diennuocMiddleware.LoginRequire, diennuocController.getEditDN);
router.post('/edit:id',diennuocMiddleware.LoginRequire, diennuocController.postEditDN);
router.get('/delete:id',diennuocMiddleware.LoginRequire, diennuocController.getDeleteDN);
router.post('/delete:id',diennuocMiddleware.LoginRequire, diennuocController.postDeleteDN);
module.exports = router;