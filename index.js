var express = require('express')
var layouts = require('express-ejs-layouts')

var app = express()

app.set('view engine', 'ejs')
app.use(layouts)


app.get('/', (req, res)=> {
	res.render('home')

})


app.use('/dinosaurs', require('./controllers/dinosaurs'))

app.use('/', express.static('public'))

app.listen(3000, ()=>console.log("You're listening to 3000"))