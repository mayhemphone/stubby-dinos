var express = require('express')
var layouts = require('express-ejs-layouts')

var app = express()

app.set('view engine', 'ejs')
app.use(layouts)

app.listen(3000, ()=>console.log("You're listening to 3000"))

app.get('/', (req, res)=> {
	res.send("Stubby Homepage")

})