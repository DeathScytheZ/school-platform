const express = require('express');
const router = express.Router();
const childController = require('../controllers/childController');

router.get('/dashboard/:childId', childController.getChildDashboard);

module.exports = router;
