const express = require('express')
const app = express()

const productRouter = require('./routes/productRoutes')

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/products', productRouter);

// Testing Route
// app.get('/', (req, res) => {
//     res.send('HELLO WORLD!');
// })

require('dotenv').config();
const PORT = process.env.PORT || 3000;

require('./database/connect')();

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
})