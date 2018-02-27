var express = require('express');
var router = express.Router();
const Task = require('../controllers/taskStation');

router.get('/todo', Task.getAll);
router.get('/done', Task.getAllDone);
router.get('/:id', Task.getOne);
router.post('/', Task.createOne);
router.put('/edit/:id', Task.editOne);
router.put('/done/:id', Task.setDone);
router.delete('/:id', Task.deleteOne);


module.exports = router;
