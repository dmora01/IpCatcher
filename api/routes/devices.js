const express = require('express');
const DevicesController = require('../controllers/devices');
const router = express.Router();

router.get('/ip', DevicesController.getIpAddress);

module.exports = router