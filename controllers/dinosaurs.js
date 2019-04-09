var express = require('express')
var router = express.Router()

// data stuff
var fs = require('fs')
var dinoData = fs.readFileSync('./dinosaurs.json')
dinoData = JSON.parse(dinoData)

// index (/) GET
router.get('/', (req, res) =>{
	res.render('dinosaurs/index', {myDinos: dinoData})
})

// new (/new) GET
router.get('/new', (req, res) =>{
	res.render('dinosaurs/new')
})

// create (/create) POST
router.post('/', (req, res) =>{
	console.log(req.body)
	res.redirect('/dinosaurs')
})

// show (/:id) GET
router.get('/:id', (req, res) =>{
	// get an array index from the request 
	var dinoIndex = parseInt(req.params.id)
	res.render('dinosaurs/show', { myDino: dinoData[dinoIndex] })
})

// edit (/edit/:id) GET
router.get('/edit/:id', (req, res) =>{
	res.render('dinosaurs/edit')
})


// TODO update (/:id) PUT/POST

// TODO destroy (/delete/:id) DELETE




module.exports = router