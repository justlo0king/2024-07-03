const express = require('express');
const router = express.Router();
const TradesController = require('../controllers/trades');
const tradesController = new TradesController();

router.get('/', function (req, res, next) {
  return tradesController.findMany(req, res);
});
router.post('/', function (req, res, next) {
  return tradesController.create(req, res);
});

router.get('/:id', function (req, res, next) {
  return tradesController.get(req, res);
});
router.patch('/:id', function (req, res, next) {
  res.status(405);
  res.send('');
});
router.put('/:id', function (req, res, next) {
  res.status(405);
  res.send('');
});
router.delete('/:id', function (req, res, next) {
  res.status(405);
  res.send('');
});

module.exports = router;
