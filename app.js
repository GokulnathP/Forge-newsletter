const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('views'));

app.get('/', (req, res) => {
    res.render('index.ejs');
})

app.post('/test', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.listen(8000, () => {
    console.log('Server started at 8000');
})