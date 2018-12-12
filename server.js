const express = require('express');

var app = express();
const port = process.env.PORT || 1234

app.set('view engine', 'hbs');
app.use(express.static(__dirname + "/public"))

app.use( (req, res, next) => {
	//res.render('maintainens.hbs');
	next();
})

app.get('/', (req, res) => {

	res.render('home.hbs',{
		pageTitle : 'Home Page' , 
		message : 'hello' ,
		pageFooter : new Date().getFullYear()
	})
});

app.get('/projects', (req, res) => {

	res.render('projects.hbs',{
		pageTitle : 'projects Page' , 
		message : 'hello projects' ,
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

app.listen(port, () => {
	console.log("server is up on port " + port);
});