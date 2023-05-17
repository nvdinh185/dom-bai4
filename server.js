const express = require('express');
const app = express();
const path = require('path');
const errorHandler = require('./_helpers/error-handler');

const publicPath = path.join(__dirname, 'client');
app.use(express.static(publicPath));

// api routes
app.use('/hoa', require('./hoa/hoa.controller'));

// global error handler
app.use(errorHandler);

app.get('/', function (req, res) {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// start server
const port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Server listening on port ' + port);
});