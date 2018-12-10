const express = require('express');

var app = express();

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"))

app.use( (req, res, next) => {
	res.render('maintainens.hbs');
})

app.get('/', (req, res) => {

	res.render('home.hbs',{
		pageTitle : 'Home Page' , 
		message : 'hello' ,
		pageFooter : new Date().getFullYear()
	})
});

app.get('/json', (req, res) => {

	res.render('home.hbs',{
		pageTitle : 'Home Page' , 
		message : 'hello' ,
		pageFooter : new Date().getFullYear()
	})
});

app.get('/bad', (req, res) => {

	res.send({
		errorMessage : 'error'
	});
});

app.listen(1234, () => {
	console.log("server is up on port 1234");
});