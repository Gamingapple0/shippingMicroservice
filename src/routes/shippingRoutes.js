// productRoutes.js
const express = require('express');
const router = express.Router();
const shippingController = require('../controllers/shippingController');

// GET all products
router.get('/api', shippingController.validateShipping);

// POST a new product
// router.post('/shipping', shippingController.validateShipping);

module.exports = router;
