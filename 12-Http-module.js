const http = require('http');
const server = http.createServer((req, res) => {
    //main page 
    if (req.url === '/') {
        res.end('Welcome to our home page')
    } else if (req.url === '/about') {
        res.end('Here is our short history')
    } else {
        res.end(`
        <h1>Oops!</h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `)
    }
});
//5000 port number (localhost:5000)
server.listen(5000);