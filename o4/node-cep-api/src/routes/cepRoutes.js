const express = require('express');
const router = express.Router();
const CepController = require('../controllers/cepController');

const cepController = new CepController();

router.get('/:cep', cepController.getAddressByCep);

module.exports = router;