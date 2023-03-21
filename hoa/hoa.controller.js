const express = require('express');
const router = express.Router();
const hoaHandler = require('./hoa.handler');

// routes
router.get('/listhoa', hoaHandler.getListHoa);

module.exports = router;