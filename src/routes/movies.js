const { Router } = require('express');
const router = Router();
//asignamos la libreria
const _ = require('underscore');

//traemos la data de movies
const movies = require('../sample.json');
console.log(movies);


// route get
router.get('/', (req, res) => {
    res.json(movies);
});

// route post
router.post('/', (req, res) => {
    const { title, director, year, rating } = req.body;
    //comprobacion si estamos reciviendo estos datos si existen
    if (title && director && year && rating){
        
        //id de nuestra movie
        const id = movies.length + 1;//constante de longitud
        //creacion de objeto nueva movie
        const newMovie = {...req.body, id};
        //guardamos dato de pelicula
        movies.push(newMovie);
        //lo muestra al cliente
        res.json(movies);
    }else{
        res.send("There was an error");
        //res.status(3030).json({error: "There was an error"});//peticion erronea
    }
    
});


// route put para actualizar
router.put('/:id', (req, res) => {
    const { id } = req.params;
    // actualizando los datos que quiero
    const { title, director, year, rating } = req.body;
    if( title && director && year && rating){
        _.each(movies, (movie, i) => {
            if(movie.id == id){
                movie.title = title;
                movie.director = director;
                movie.year = year;
                movie.rating = rating;
            }
        });
        //enviame movies actualizadas
        res.json(movies);

    } else {
        res.status(500).json({error: 'There was an error'});
    }
});



// route delete
router.delete('/:id', (req, res) => {
    //obtenemos nuestro id con request
    const { id } = req.params;
    //recorremos un arreglo
    _.each(movies, (movie, i) => {
        if (movie.id == id){
            //elimina 1 movie
            movies.splice(i, 1);
        }
    });
    //envia arreglo actualizado
    res.send(movies);
});


module.exports = router;