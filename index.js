const express = require('express') //path to third party
const methodOverride = require('method-override')
const mongoose = require('mongoose')
require('dotenv').config() //path to third party
const breadController = require('./controllers/bread') //this is your path to your personal code
const bakerController = require('./controllers/baker')
const app = express()

// MIDDLEWARE
app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

//routes
app.use('/breads', breadController)
app.use('/bakers', bakerController)

// db connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('DB connected'))
    .catch(err => console.error(err));

const PORT = process.env.PORT

app.listen(PORT, console.log(`listening quietly on port 8080`))
