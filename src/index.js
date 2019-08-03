//utilizamos express
const express = require('express');
//se empieza a utilizar el framework y se guarda en app
const app = express(); 
//empezamos a utilizar el fw=framework
app.listen(3000, () => {
    console.log(`Server on port ${3000}`);
});