const express = require('express');
const router = express.Router();

const hoaController = require('../controllers/HoaController');

router.get('/', hoaController.index);

module.exports = router;
