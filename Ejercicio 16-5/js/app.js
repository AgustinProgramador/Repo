var restify = require ("restify");
var config =require("./config.js");

var server = restify.createServer({
	name: "testServer"
});

server.use(restify.queryParser());
server.use(restify.bodyParser());
server.use(restify.fullResponse());

server.listen(8080, '127.0.0.1', function() {
	console.log('hey');
});

var Hellomodel = function (req, res, next) {
	res.send(200, "Hola Mundo");
	return next();
};

server.get({
	path: "/",
	version: "1.0.0"
}, Hellomodel);