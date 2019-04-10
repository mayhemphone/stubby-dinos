var express = require('express')
var router = express.Router()

// data stuff
var fs = require('fs')
var cryptidData = fs.readFileSync('./cryptids.json')

cryptidData = JSON.parse(cryptidData)

// index (/) GET
router.get('/', (req, res) =>{
	//adding filter function
	var searchParams = req.query.searchParams
	var activeCryptids = []
	cryptidData.forEach((cryptid, index)=> {
		activeCryptids.push({cryptid: cryptid, id: index})
	})

	if (searchParams){
		activeCryptids = activeCryptids.filter((cryptid)=>{
			return cryptid.cryptid.name.toLowerCase().includes(searchParams.toLowerCase())
			// return cryptid.name.includes(searchParams)
		})
	}

	res.render('cryptids/index', {myCryptid: activeCryptids})
})


// new (/new) GET
router.get('/new', (req, res) =>{

	res.render('cryptids/new')
})

// create (/create) POST
router.post('/', (req, res) =>{
	cryptidData.push(req.body)
	fs.writeFileSync('./cryptids.json', JSON.stringify(cryptidData))
	res.redirect('/cryptids')
})

// show (/:id) GET
router.get('/:id', (req, res) =>{
	// get an array index from the request 
	var cryptidIndex = parseInt(req.params.id)
	res.render('cryptids/show', { myCryptid: cryptidData[cryptidIndex] })
})

// edit (/edit/:id) GET
router.get('/edit/:id', (req, res) =>{
	res.render('cryptids/edit')
})


// TODO update (/:id) PUT/POST

// TODO destroy (/delete/:id) DELETE




module.exports = router