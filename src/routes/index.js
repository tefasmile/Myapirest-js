//este ejecuta nuevas rutas para el servidor
const { Router } = require('express');
const router = Router();

// routes
router.get('/', (req, res) => {
    res.json({'Title': 'Hello worldcode'});
});

//lo exportamos
module.exports = router;