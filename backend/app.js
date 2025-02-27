const express = require('express');
const router = require('./routes/equipos');

const app = express();

app.use(express.json());
app.use(express.static(`${__dirname}/uploads`));

app.use((req, res, next) =>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
})

app.use('/', router);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ title: 'Error' , message: 'Ocurrio un error en el servidor', error: err.message});
})

module.exports = app;