const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');

const templatesPath = path.join(__dirname, '../templates/views')
const partialPath = path.join(__dirname, '../templates/partials');


app.set('view engine', 'hbs');
app.set('views', templatesPath);
hbs.registerPartials(partialPath);

app.get('/', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res) => {
    res.render('about')
})

app.get('/service', (req, res) => {
    res.render('services')
})

app.get('*', (req, res) => {
    res.render('404')
})

app.listen(3000, () => {
    console.log('listen to partials example')
})