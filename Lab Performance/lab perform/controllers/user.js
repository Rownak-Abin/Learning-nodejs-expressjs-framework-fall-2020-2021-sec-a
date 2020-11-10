const express 	= require('express');
const userModel = require.main.require('./models/userModel');
var url = require('url');
const router 	= express.Router();

router.get('*',  (req, res, next)=>{
	
		next();
	
});

router.get('/create', (req, res)=>{
	res.render('user/create');
});


router.post('/create', (req, res)=>{
	var newUser = {
		eName : req.body.eName,
		cName : req.body.cName,
		cNo : req.body.cNo,
		uname: req.body.username,
		password: req.body.password,
		type: req.body.type
	};

	

	userModel.insert(newUser, function(status){
				
		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})

});

router.get('/edit/:id', (req, res)=>{

		var i = req.params.id;
		
		userModel.getById(i, function(results){
			console.log(i);
			res.render('user/edit', {users: results});
			
		})

		
});

router.post('/edit/:id', (req, res)=>{

	var i = req.params.id;

	var editUser = {
		eName : req.body.eName,
		cName : req.body.cName,
		cNo : req.body.cNo,
		uname: req.body.username,
		password: req.body.password,
		type: req.body.type
	};

	console.log(editUser.eName);

	userModel.update(i, editUser, function(status){
				
		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})

	
});

router.get('/delete/:id', (req, res)=>{
	
	
	
			
			res.render('user/delete' );
			
		

	//console.log(editUser.eName);

	


});

router.post('/delete/:id', (req, res)=>{

	var i = req.params.id;

	userModel.delete(i, function(status){

		if(status){
			
			res.redirect('/home');
		}else{
			res.redirect('/login');
		}

	})
	});






module.exports = router;

/*
	var f = function () {}
    var sql= "select * from table";
	getResult(sql,function(results){
			
			console.log(results);
			
	});
	\


	void func(int x,int y)
	{
	 z=x+y
	}

	int main()
	{
		int x,y;
		z=x+y;
		
	}

	function f1(x,y)
	{
	
	}

	f1(10,20);


*/