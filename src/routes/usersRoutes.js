const { Router } = require('express')
const { deleteFavoriteHandler, createUserHandler, addFavoriteHandler} = require('../handlers/usersHandlers')


const usersRoutes = Router()

// usersRoutes.get('/', getUserHandler)
// usersRoutes.get('/:id', getUserByIdHandler)
usersRoutes.post('/', createUserHandler)
usersRoutes.post('/favorites', addFavoriteHandler)
usersRoutes.delete('/favorites', deleteFavoriteHandler) 
// usersRoutes.get('/favorites', getFavoriteHandler)

module.exports = usersRoutes
 
