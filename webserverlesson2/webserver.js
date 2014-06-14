var http = require("http");
function process_request(req,res) {
	var body = "Hello World from Web Server ! \n";
	debugger;
	var content_length = body.length;
	debugger;
	res.writeHead(200,{ 
		'Content-Length' : content_length,
		'Content-Type': 'text/plain'});
	res.end(body);
	}

	var server = http.createServer(process_request);
	server.listen(8080);
