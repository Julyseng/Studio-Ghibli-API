const request = require ('superagent')
const db = require ('./db')

const imageMappings = {
    "2baf70d1-42bb-4437-b551-e5fed5a87abe": 'castle.jpg',
    "12cfb892-aac0-4c5b-94af-521852e46d6a": 'grave.jpg',
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49": 'toroto.jpg'
}

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
            films.forEach(film => film.img = imageMappings[film.film_id])
           db.saveFilms(films)
        .then(result => {
            console.log(result)
        }) 
        })
})

//google reset auto increment 
//practice charlotte web 