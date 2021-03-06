var express = require('express')
var layouts = require('express-ejs-layouts')

var app = express()
var methodOverride = require('method-override')

app.use(methodOverride('_method'))


app.set('view engine', 'ejs')
app.use(layouts)

// add body parsing middle
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res)=> {
	res.render('home')

})


app.use('/dinosaurs', require('./controllers/dinosaurs'))
app.use('/cryptids', require('./controllers/cryptids'))

app.use('/', express.static('public'))

app.listen(3000, ()=>console.log("You're listening to 3000"))