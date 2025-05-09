const express = require('express');
const router = express.Router();
const controller = require('../controllers/proverbsController');

// 🔹 مسیرهای ویژه (قبل از :id)
router.get('/random', controller.getRandomProverb);
router.get('/search', controller.searchProverbs);

// 🔹 مسیرهای CRUD معمولی
router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.delete('/:id', controller.remove);

module.exports = router;