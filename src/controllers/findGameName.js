const { Videogames, Genregames } = require('../db')
const { Op } = require('sequelize')



const findGameName = async (name) =>{


    let findGame = []
    if (!name) {
        findGame = await Videogames.findAll({
            include: [{
                model: Genregames,
                attributes: ['id', 'name'],
                through: {
                    attributes: [] //evita que traiga la informasion de la tabla intermedia
                } 
             }]
         }) 

    } else {
        findGame = await Videogames.findAll({
        where: {
            name: {[Op.iLike]: `%${name}%`}
        },
        include: [{
            model: Genregames,
            attributes: ['id','name'],
            through: {
                attributes: [] //evita que traiga la informasion de la tabla intermedia
            } 
         }]
    })

    }

    return findGame
}

module.exports = {findGameName}
