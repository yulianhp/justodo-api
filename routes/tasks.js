var express = require('express');
var router = express.Router();
const Task = require('../controllers/taskStation');

router.get('/', Task.getAll);
router.get('/:id', Task.getOne);
router.post('/', Task.createOne);
router.put('/:id', Task.editOne);
router.delete('/:id', Task.deleteOne);


module.exports = router;
