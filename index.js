const express = require('express')
const { default: mongoose } = require('mongoose')
const bodyParser = require('body-parser');
const app = express()
const port = 3000
const userRoute = require('./routes/user.routes.js')
const reactionRoute = require('./routes/reaction.routes.js')
const reactionOccuranceRoute = require('./routes/reactionOccurance.routes.js')
app.use(express.json());
app.use(bodyParser.json());
require('./db/mongodb')
app.use('/user', userRoute);
app.use('/reaction', reactionRoute);
app.use('/reactionOccurance', reactionOccuranceRoute);


app.use(function (req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
  });

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})



