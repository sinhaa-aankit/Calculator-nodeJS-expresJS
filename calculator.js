//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req,res){
	res.sendFile(__dirname + "/index.html");
});

app.post("/", function(req,res){

	var n1 = Number(req.body.Num1);
	var n2 = Number(req.body.Num2);

	var add = n1+n2;
	var sub = (n1-n2);
	var mul = n1*n2;
	var div = n1/n2;

	res.send("Addition is: " + add + 
		"<br> Substraction is: " + sub +
		"<br> Multiplication is: " + mul +
		"<br> Division is: " + div 
		);
});

app.listen(3000, function(){
	console.log("server is running on port: 3000");
});