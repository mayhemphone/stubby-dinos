var express = require('express')
var router = express.Router()

// index (/) GET
router.get('/', (req, res) =>{
	res.render('dinosaurs/index')
})

// new (/new) GET
router.get('/new', (req, res) =>{
	res.render('dinosaurs/new')
})

// create (/create) POST

// show (/:id) GET
router.get('/:id', (req, res) =>{
	res.render('dinosaurs/show')
})

// edit (/edit/:id) GET
router.get('/edit/:id', (req, res) =>{
	res.render('dinosaurs/edit')
})


// TODO update (/:id) PUT/POST

// TODO destroy (/delete/:id) DELETE




module.exports = router