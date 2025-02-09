const express = require('express');
const router = express.Router();

const medsController = require('../controllers/meds');

router.get('/', medsController.getAllMeds);

router.get('/:id', medsController.getSingleMeds);

router.post('/', medsController.createMeds);
router.put('/:id', medsController.updateMeds);
router.delete('/:id', medsController.deleteMeds);

module.exports = router;
