var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var app = express();
var model = require('../models/todos.js')
module.exports = router

// WRITE SOME ROUTES HERE

// FEEL FREE TO SPLIT INTO MULTIPLE FILES AS NEEDED

router.get('/',function(req,res){
	res.json(model.listPeople())
})

router.get('/:person', function(req,res){
	var list = model.list(req.params.person)
	if (!list) res.sendStatus(404)

	if (req.query.status == 'complete'){	
		list = list.filter(function(item){
			return item.complete;
		})
	}
	else if (req.query.status == 'active'){
		list = list.filter(function(item){
			return !item.complete;
		})
	}
	res.json(list)
})

router.post('/:person',function(req,res){
	//{ name: 'one of sarah\'s tasks' }
	//use bodyParser in app.js


	if(!(req.body.name || req.body.complete)){
		res.sendStatus(400)
	}

	else{
		model.add(req.params.person,req.body)
		res.status(201).send(req.body)
	}
})

router.put('/:person/:idx',function(req,res){
	model.complete(req.params.person,req.params.idx)
	res.status(200).send('completed')
})

router.delete('/:person/:idx', function(req,res){
	model.remove(req.params.person, req.params.idx)
	res.status(204).send('deleted')
})
