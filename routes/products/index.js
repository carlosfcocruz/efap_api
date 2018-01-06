const express = require('express');
const router = express.Router();

router.get('/', function (req, res) {
  res.send('All Products')
});

router.get('/:id', function (req, res) {
  res.send('Product Id: ' + req.params.id);
});

router.post('/:id', function (req, res) {
  res.send('POST Product Id: ' + req.params.id);
});

router.put('/:id', function (req, res) {
  res.send('PUT Product Id: ' + req.params.id);
});


module.exports = router;