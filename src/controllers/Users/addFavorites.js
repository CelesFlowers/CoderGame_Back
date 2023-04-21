const{Users, Videogames, Favorites} = require('../../db')

const addFavorite= async (idUser, idVideogames)=>{
    const existe = await Favorites.findOne({
      where:{VideogameId:idVideogames,UserId:idUser }
        })
        console.log(existe)  
    if (existe) throw new Error(`ya agrego el juego con id ${idVideogames}` )



    await Favorites.create({VideogameId:idVideogames, UserId:idUser})

    return 'el juego se creo'
}

module.exports= {addFavorite}
