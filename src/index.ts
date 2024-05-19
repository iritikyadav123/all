import express from 'express'

const app = express();

app.get('/', function(req,res) {
    res.json( {
        msg : "hell ritik"
    })
})

console.log('connection');

app.listen(3000);