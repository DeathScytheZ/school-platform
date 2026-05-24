const express = require('express');
const router = express.Router();
const parentController = require('../controllers/parentController');

router.get('/dashboard/:parentId', parentController.getParentDashboard);
router.get('/announcements', parentController.getAnnouncements);

module.exports = router;
