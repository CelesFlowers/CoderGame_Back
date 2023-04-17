const { Videogames, Genregames } = require('../db.js')
const createNewGame = async ({ name, released, genres, rating, platforms, description, image }) => {
    const existName = await Videogames.findOne({
        where: {
            name: name
        }
    })
    if (existName) throw new Error('ya existe un usuario con ese nombre')
    const newVideoGame = await Videogames.create({ name, released, genres, rating, platforms, description, image })
    const objGenres = []
    for (const genre of genres) {

        const genreObject = await Genregames.findAll({
            where: {
                name: genre
            }
        })
        if (genreObject.length === 0) throw new Error('debes agregar un genero que exista')

        const [created] = genreObject

        objGenres.push(created)
    }

    await newVideoGame.addGenregames(objGenres)
    return newVideoGame
}

module.exports = { createNewGame }