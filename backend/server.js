console.log('welcome to Piiquante!');
const http = require('http');
const app = require('./app');

app.set('port',3000)
const server =http.createServer((req, res) => {
	res.end('response server');
});

server.listen(3000);

const