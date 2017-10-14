var http = require('http');

var port1 = 7000;

var port2 = 7500;

function handleRequest1(request, response) {
	response.end("You're great!");

	//server side STUFF goes here

}

function handleRequest2(request, response) {
	response.end("You're not great!");

	//server side STUFF goes here

}

var server1 = http.createServer(handleRequest1);

var server2 = http.createServer(handleRequest2);


server1.listen(port1, function() {
	console.log("You're great! Port: " + port1);
});

server2.listen(port2, function() {
	console.log("You're not great! Port: " + port2);
});