const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = require('dotenv').config();
const { Pool } = require('pg');
const app = express();
const port = process.env.PORT || 8000;

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
  });


// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));



app.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        console.error(err);
        res.status(500).send('*Loud buzzer noise* try again');
    }
});


app.listen(port, () => {
    console.log('server is listening on port ' + port);
});
