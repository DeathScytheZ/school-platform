const express = require('express');
const router = express.Router();
const { getRequestList, getUserList } = require("../controllers/systemAdminController");

router.get('/request', getRequestList);
router.get('/users', getUserList);

module.exports = router;
