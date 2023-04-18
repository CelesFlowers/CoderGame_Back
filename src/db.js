const { Sequelize, Op } = require('sequelize');
require('dotenv').config();
const {
   DB_USER, DB_PASSWORD, DB_HOST, DB_NAME
} = process.env;
const modelVideoGames = require('./models/VideoGame.js')
const modelGenreGames = require('./models/GenreGame.js')
const modelUsers = require('./models/User.js')
const modelPlatforms = require('./models/platforms.js')

const db = new Sequelize(
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
   {
      logging: false,
   }
);

modelVideoGames(db);
modelGenreGames(db);
modelPlatforms(db);
modelUsers(db)

const { Videogames, Genregames, Platforms, Users } = db.models

Videogames.belongsToMany(Genregames, { through: 'GameGenre' }); // muchos a muchos, tabla intermedia
Genregames.belongsToMany(Videogames, { through: 'GameGenre' }); // tiene que tener el mismo nombre

Videogames.belongsToMany(Platforms, { through: 'GamePlatform' });
Platforms.belongsToMany(Videogames, { through: 'GamePlatform' });

Videogames.belongsToMany(Users, { through: 'Favorites' });
Users.belongsToMany(Videogames, { through: 'Favorites' });



module.exports = {
   ...db.models,
   conn: db,
};

