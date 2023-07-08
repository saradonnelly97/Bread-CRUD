const express = require('express') //path to third party
require('dotenv').config() //path to third party
const breadController = require('./controllers/bread') //this is your path to your personal code

const app = express()

// MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadController)

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening quietly on port 8080`))
