const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

mongoose.connect("mongodb+srv://Username:password@cluster0-vmfvb.mongodb.net/test?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => { console.log("DB connected") }).catch((err) => { console.log(err) });

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