const express = require('express')
const app = express()
const port = 3000

const bodyPs = require("body-parser");
app.use(bodyPs.urlencoded({ extended: false}));
app.use(bodyPs.json());

const { body } = require('express-validator');

const transmisiRouter = require('./routes/transmisi');
app.use('/api/transmisi', transmisiRouter);



app.listen(port, () => {
    console.log(`aplikasi berjalan di http:://localhost:${port}`)
})