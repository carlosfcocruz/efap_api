const express = require('express');
const userRoute = express.Router();

userRoute.get('/', function (req, res) {
  res.send('All Users');
});

userRoute.get('/:id', function (req, res) {
  res.send('User Id: ' + req.params.id);
});

userRoute.post('/:id', function (req, res) {
  res.send('POST User Id: ' + req.params.id);
});

userRoute.put('/:id', function (req, res) {
  res.send('PUT User Id: ' + req.params.id);
});


module.exports = userRoute;