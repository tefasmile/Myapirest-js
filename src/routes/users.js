const { Router } = require('express');
const router = Router();

//este modulo nos permite realizar peticiones a otras apps
const fetch = require('node-fetch');

router.get('/', async (req, res) => {
    //nuestra peticion a la app jsonplaceholder
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    //muestra usuarios respondieno en json
    const users = await response.json();
    console.log(users);
    //res.send('users');
});

module.exports = router;