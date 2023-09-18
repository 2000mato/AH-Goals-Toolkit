const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const env = require('dotenv').config();

const app = express();

const port = 8000;

// Middleware
app.use(helmet());
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));



app.get('/', (req, res) => {
    res.send('Hello world');
});

app.listen(port, () => {
    console.log('server is listening on port ' + port);
});
