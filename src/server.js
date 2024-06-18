const express = require('express');
const bodyParser = require('body-parser');
const livrosController = require('./controllers/livrosController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use('/', livrosController);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT} 🚀`);
});
