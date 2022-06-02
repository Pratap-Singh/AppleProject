const express = require('express');
const path = require('path');
const app = express();

const tempath = path.join(__dirname, '../templates');
app.set('view engine', 'hbs')
app.set('views', tempath);

app.get('/abouts', (req, res) => {
    res.render('about')
})

app.listen(3000, () => {
    console.log('listen to nextp page')
})