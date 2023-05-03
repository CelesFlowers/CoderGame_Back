const {Videogames, Users, Promotions} = require('../../db')
const verifyRol = require('../../helpers/verifyRol')
const {Op} = require('sequelize')

const getAllVideogames = async(sub) =>{
    const rol = await verifyRol(sub)
    if(rol !== 'admin') throw new Error('You are not authorized to access this information')
    const currentDate = new Date()
    const allVideogame = await Videogames.findAll({
        include:[
            {
            model:Users,
            attributes:['sub','email']
        },
        {
            model:Promotions,
            attributes:['discountPorcentage','dueDate'],
            where: {dueDate:{[Op.gt]: currentDate}},
            required: false
        }
    ]
    }) 

    return allVideogame
}

module.exports = {getAllVideogames}