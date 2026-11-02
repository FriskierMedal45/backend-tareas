const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv').config();
const connectDB = require('./Config/db');
const errorHandler = require('./middleware/errorMiddleware');

const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/tareas', require('./routes/tareasRoutes'));

const startServer = async () => {
    await connectDB();

    app.listen(port, () => {
        console.log(`Servidor iniciado en el puerto ${port}`);
    });
};

startServer();