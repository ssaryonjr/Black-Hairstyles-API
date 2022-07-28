const express = require('express');
const app = express();
const cors = require("cors");
const hairStyles = require('./hairstyles');
const PORT = 8000;

app.use(cors());


app.get('/', (req,res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/api/:hairStyle', (req,res) => {
    const hairType = request.params.hairStyle.toLowerCase();
    hairStyles[hairType] ?
    res.json(hairStyles[hairType]) 
    : res.json(hairStyles['unknown'])

})

app.listen(process.env.PORT || PORT, () => {
    console.log('server is running')
})