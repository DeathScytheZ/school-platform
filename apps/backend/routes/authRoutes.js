const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const studentController = require('../controllers/studentController');
const authenticate = require('../middleware/auth');

router.post('/signup', authController.signup);
router.post('/login', authController.login);
router.post('/addUser', authController.addUser);
router.post('/rejectUser', authController.rejectUser);
router.get('/students', authenticate, studentController.studentList);
router.get('/profile', authenticate, authController.getProfile);


module.exports = router;
