const express = require('express');
const router = express.Router();
const { getRequestList, getUserList, createChild, createParent, getChildren } = require("../controllers/systemAdminController");

router.get('/request', getRequestList);
router.get('/users', getUserList);
router.post('/create-child', createChild);
router.post('/create-parent', createParent);
router.get('/children', getChildren);

module.exports = router;
