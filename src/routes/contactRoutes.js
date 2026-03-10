const express = require('express');
const contactController = require('../controllers/contactController');
const validateContactPayload = require('../middlewares/validateContactPayload');
const validateIdParam = require('../middlewares/validateIdParam');

const router = express.Router();

router.post('/', validateContactPayload('create'), contactController.create);
router.get('/', contactController.list);
router.patch('/:id', validateIdParam, validateContactPayload('update'), contactController.update);
router.delete('/:id', validateIdParam, contactController.remove);

module.exports = router;
