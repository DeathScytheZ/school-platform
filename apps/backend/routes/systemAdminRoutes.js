const express = require('express');
const router = express.Router();
const { getRequestList, getUserList, createChild, createParent, getChildren, createClass, getAvailableClasses, getClasses } = require("../controllers/systemAdminController");

router.get('/request', getRequestList);
router.get('/users', getUserList);
router.post('/create-child', createChild);
router.post('/create-parent', createParent);
router.get('/children', getChildren);
router.post('/create-class', createClass);
router.get('/available-classes/:type', getAvailableClasses);
router.get('/classes', getClasses);

module.exports = router;
