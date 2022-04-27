const app = require('./app')
const { sequelize } = require('./db/database');
const { models } = require('./models/models')

const PORT = process.env.PORT || '4000'
//Iniciar servidor
const server = app.listen(PORT, async () => {
    try {
        //FORCE true: DROP TABLE
        await sequelize.sync({ force: false, alter:true})
    } catch (error) {
        throw new Error(error)
    }
    console.log('Servidor ejecutandose en el puerto', PORT);
})

module.exports = server