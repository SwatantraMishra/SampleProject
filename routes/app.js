var express = require('express');
var router = express.Router();
var User=require('../models/user');

router.get('/', function (req, res, next) {
	
   res.render('index');
});

router.get('/', function (req, res, next) {
	
   res.render('index');
});

router.get('/node', function (req, res, next) {
	User.findOne({},function(err,doc){
		if(err)
		{
return res.send('!error');
		}

 res.render('node',{data:doc.email});
	})
   
});

router.post('/', function (req, res, next) {
  var email= req.body.email;
  var user=new User({
  	firstname:'Swatantra',
	lastname:'Mishra',
	email:email,
	password:'super-secret'
  })
  user.save();
  res.redirect('/');

});

module.exports = router;