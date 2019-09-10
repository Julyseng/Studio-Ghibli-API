const request = require ('superagent')
const db = require ('./db')

request.get('https://ghibliapi.herokuapp.com/films')
.then  (result => {
    let films = result.body.map(film => {
        return { 
            film_id: film.id,
            title: film.title,
            description: film.description,
            producer: film.producer,
            director: film.director,
            release_date: film.release_date,
            rt_score: film.rt_score
        }
    }) 
    db.deleteFilms()
        .then(() => {
           db.saveFilms(films)
        .then(result => {
            console.log(result)
        }) 
        })
})

//google reset auto increment 
//practice charlotte web 