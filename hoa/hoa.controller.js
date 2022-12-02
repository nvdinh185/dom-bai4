const express = require('express');
const router = express.Router();
const hoaHandler = require('./hoa.handler');

// routes
router.get('/listhoa', getListHoa);

module.exports = router;

function getListHoa(req, res, next) {
    hoaHandler.getListHoa()
        .then(listhoa => res.json(listhoa))
        .catch(err => next(err));
}