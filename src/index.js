//utilizamos express
const express = require('express');
//se empieza a utilizar el framework y se guarda en app
const app = express(); 
//requiero de modulo morgan
const morgan = require('morgan');

//settings
app.set('port', 3030);//variable del puerto


//ejecutando middlewares 
//un middleware es una funcion que procesa datos antes de que el servidor los reciba
app.use(morgan('dev'));
//usar datos que vienen de inputs
app.use(express.urlencoded({extended: false}));
//usar y recibir formatos json y entenderlos
app.use(express.json());

//starting the server
app.listen(app.get('port'), () => {
    console.log(`Server on port ${app.get('port')}`);
});