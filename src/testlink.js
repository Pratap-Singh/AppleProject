const express = require('express');
const app = express();
const requests = require('requests');

app.get('/linkdata', (req, res) => {
    requests(
    'https://jsonplaceholder.typicode.com/posts'
    ).on("data", (chunk) => {
        const myobj = JSON.parse(chunk);
        // const rty = [myobj]
        console.log(myobj)
        res.write(myobj[0].title);
    })
    .on("end", (err) => {
        if(err){
            res.write(err)
            console.log(err)
        }
        res.end();
    })
});

app.listen(3000, () => {
    console.log('This is rest api port');
})
