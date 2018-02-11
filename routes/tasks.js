var express = require('express');
var router = express.Router();
const Task = require('../controllers/taskStation');

router.get('/', Task.getAll);
router.get('/:id', Task.getOne);
router.post('/', Task.createOne);

module.exports = router;
