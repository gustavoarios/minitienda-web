const express = require('express');
const router = express.Router();

router.get('/courses', (req, res) => {
    res.json([
        { id: 1, title: 'Curso 1', price: 100 },
        { id: 2, title: 'Curso 2', price: 150 },
    ]);
});

router.post('/contact', (req, res) => {
    console.log(req.body);
    res.json({ success: true });
});

module.exports = router;
