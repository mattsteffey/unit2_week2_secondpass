const express = require('express');
const app = express();

const mongoose = require('mongoose');

app.get('/', function(req, res) {
	res.sendFile(__dirname+'/index.html');
});

app.get('/api', function(req, res) {
	res.json({name: "Bob"});
});

app.listen(3000, function() {
	console.log("We're up on port 3000");
});