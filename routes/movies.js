const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

router.get('/', (req,res) => { 
    Movie.find()
    .then(foundMovies => res.render('movies',{movies:foundMovies}))
    .catch(err => res.send(err));
})

router.get('/:id', (req, res)=>{
   const { id } = req.params;
   Movie.findById(id)
   .then(movieFound => res.render('movie-details', {singleMovie: movieFound}))
   .catch(err => res.send(err));
})


module.exports = router;