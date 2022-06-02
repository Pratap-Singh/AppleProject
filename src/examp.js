const express = require('express');
const path = require('path');
const app = express();

// const staticpath = path.join(__dirname, '../public');
// app.use(express.static(staticpath));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
    res.render('index', {
        vendor: 'panner'
    })
})

app.get('/', (req, res) => {
    res.send('pages in srcd')
})

app.get('/about', (req, res) => {
    res.send({
        id: 1,
        name: 'Vino'
    })
});

app.listen(3000, () => {
    console.log('listen to apple port');
})