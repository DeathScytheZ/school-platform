const express = require('express');
const router = express.Router();
const announcementController = require('../controllers/announcementController');

router.get('/', announcementController.getAnnouncements);
router.post('/general', announcementController.createGeneralAnnouncement);
router.post('/school', announcementController.createSchoolAnnouncement);

module.exports = router;
