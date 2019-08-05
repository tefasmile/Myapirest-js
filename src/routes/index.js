//este ejecuta nuevas rutas para el servidor
const { Router } = require('express');
const router = Router();

// routes
router.get('/test', (req, res) => {
    
    const data = {
        'name': 'tefa',
        'website': 'tefasmile.com'
    };
    
    res.json(data);
});

//lo exportamos
module.exports = router;