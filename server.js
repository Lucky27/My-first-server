
function serverOne(){
var http = require("http");

var PORT = 7000;

function handleRequest(request, response){

	response.end("Bingo! Path Hit:" +request.url);
}

var server = http.createServer(handleRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
});
}

serverOne()



function serverTWO(){
var http = require("http");

var PORT = 7500;

function handleSecondRequest(request, response){

	response.end("NO WAY JOSE! Path Hit:" +request.url);
}

var server = http.createServer(handleSecondRequest);

server.listen(PORT, function(){
	console.log("Server listening on: http://localhost:" + PORT);
});
}

serverTWO()