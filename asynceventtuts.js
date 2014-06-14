var http = require("http");
var url = require("url")
var events = require("events");

var customEvent =  new events.EventEmitter();

customEvent.on('a', function(res) {
	res.end("Event a has been fired and Executed");
});

customEvent.on('error', function(res,err) {
	console.log("An Error has occured");
	console.log("Error : " + err.message);
	res.end(err.message);
});

var server = http.createServer(function(req,res) {
	process_request(req,res)
}).listen("8080","127.0.0.1");


function process_request(req,res) {
 	var urlpath = url.parse(req.url.toString()).pathname;    
    console.log(req.url.toString());
    
    res.writeHead("Content-Type","text/html");
    switch(urlpath) {
    	case "/customevent/eventa":
    	
    	var listeners = customEvent.listeners('a').length;
    	console.log("Number of listeners : " + listeners);
    	if(listeners > 0) {
    		customEvent.emit('a',res);
    	}else{
    		res.end("No event listeners attached");
    	}
    	break;

    	case "/customevent/removeeventsfora":
    	customEvent.removeAllListeners('a');
    	res.end("Event Listeners have been removed !!");
    	break;
    	
    	default:
    	customEvent.emit("error",res, new Error("no custom events found"));	
    	break;

    }
 	
	
}