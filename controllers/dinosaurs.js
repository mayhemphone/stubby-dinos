var express = require('express')
var router = express.Router()
var dinoIndex
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
	dinoData.push(req.body)
	fs.writeFileSync('./dinosaurs.json', JSON.stringify(dinoData))
	res.redirect('/dinosaurs')
})

// show (/:id) GET
	router.get('/:id', (req, res) =>{
	// get an array index from the request 
	var dinoIndex = parseInt(req.params.id)
	res.render('dinosaurs/show', { myDino: dinoData[dinoIndex], dinoIndex: dinoIndex })
})

// edit (/edit/:id) GET
router.get('/edit/:id', (req, res) =>{
	res.render('dinosaurs/edit')
})


// TODO update (/:id) PUT/POST

// TODO destroy (/delete/:id) DELETE




module.exports = router