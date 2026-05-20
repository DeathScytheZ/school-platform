const express = require('express');
const router = express.Router();
const systemAdminControllers = require("../controllers/systemAdminController");

router.get('/request', systemAdminControllers);

module.exports = router;
