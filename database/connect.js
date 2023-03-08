const mongoose = require('mongoose')

mongoose.set('strictQuery', true)

module.exports = () => {
    mongoose.connect(process.env.DB_URI_ATLAS, { useNewUrlParser: true });

    const database = mongoose.connection;

    database.on('error', (error) => {
        console.log(error.message);
    })

    database.once('connected', () => {
        console.log('Database is connected successfully!');
    })
}