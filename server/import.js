const request = require ('superagent')
const db = require ('./db')

const imageMappings = {
    "2baf70d1-42bb-4437-b551-e5fed5a87abe": 'castle.jpg',
    "12cfb892-aac0-4c5b-94af-521852e46d6a": 'grave.jpg',
    "58611129-2dbc-4a81-a72f-77ddfc1b1b49": 'toroto.jpg',
    "ea660b10-85c4-4ae3-8a5f-41cea3648e3e": 'kiki.jpg',
    "4e236f34-b981-41c3-8c65-f8c9000b94e7": 'only-yesterday.jpg',
    "ebbb6b7c-945c-41ee-a792-de0e43191bd8": 'porco.jpg',
    "1b67aa9a-2e4a-45af-ac98-64d6ad15b16c": 'pompoko.jpg',
    "ff24da26-a969-4f0e-ba1e-a122ead6c6e3": 'whisper.jpg',
    "0440483e-ca0e-4120-8c50-4c8cd9b965d6": 'princess.jpg',
    "45204234-adfd-45cb-a505-a8e7a676b114": 'My-neighbors-the-yamadas-poster.jpg',
    "dc2e6bd1-8156-4886-adff-b39e6043af0c": 'spirited.jpg',
    "90b72513-afd4-4570-84de-a56c312fdf81": 'the-cat-returns.jpg',
    "cd3d059c-09f4-4ff3-8d63-bc765a5184fa": "hol'smoving.jpg",
    "112c1e67-726f-40b1-ac17-6974127bb9b9": 'tales.png',
    "758bf02e-3122-46e0-884e-67cf83df1786": 'ponyo.jpg',
    "2de9426b-914a-4a06-a3a0-5e6d9d3886f6": 'arrietty-movie-poster.jpg',
    "45db04e4-304a-4933-9823-33f389e8d74d": 'poppyhill.jpg',
    "67405111-37a5-438f-81cc-4666af60c800": 'windrise.jpg',
    "578ae244-7750-4d9f-867b-f3cd3d6fecf4": 'princessCrime.jpg',
    "5fdfb320-2a02-49a7-94ff-5ca418cae602": 'Marnie.jpg'
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