const express = require('express') //path to third party
require('dotenv').config() //path to third party
const breadController = require('./controllers/bread') //this is your path to your personal code

const app = express()

//routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening quietly on port 8080`))
