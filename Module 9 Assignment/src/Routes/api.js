const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');
const adminController = require('../Controllers/adminController');
const subAdminController = require('../Controllers/subAdminController');
const postController = require('../Controllers/postController');

router.get('/user/create', userController.create);
router.get('/user/read', userController.read);
router.get('/user/delete', userController.delete);
router.get('/user/update', userController.update);

router.get('/user/create', adminController.create);
router.get('/user/read', adminController.read);
router.get('/user/delete', adminController.delete);
router.get('/user/update', adminController.update);

router.get('/user/create', subAdminController.create);
router.get('/user/read', subAdminController.read);
router.get('/user/delete', subAdminController.delete);
router.get('/user/update', subAdminController.update);

router.get('/user/create', postController.create);
router.get('/user/read', postController.read);
router.get('/user/delete', postController.delete);
router.get('/user/update', postController.update);

module.exports = router;
