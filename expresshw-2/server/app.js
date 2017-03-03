var express = require('express'),
app = express(),
server = require('http').createServer(app),
path = require('path');
// bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({
// 	extended: true
// }));

app.use(express.static(path.join(__dirname, 'public')));

//views//
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


app.get('/', function(request, response){
	response.send("THIS IS TOTALLY WORKING")
})


//route//
app.post('/login', function(request, response){
	login.push(request.body.input);
	console.log(input); //array of info
	response.render('home', {usernameArray: login});
})


// when at the json extension, the username and password should show up!!!
app.get('/json', function(request, response){
	var json = {
		"User": "Input",
		"Password": "password"
	};

	res.json(json)
})

server.listen(3000, function(){
	console.log("listening on port 3000")
})
