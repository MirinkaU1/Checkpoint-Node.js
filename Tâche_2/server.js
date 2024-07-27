var http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello Node !!!!</h1>\n');
    // Le serveur écoute sur le port 3000
}).listen(3000);
console.log('Server is running on http://localhost:3000');