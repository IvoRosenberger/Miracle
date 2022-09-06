const http = require("http");
const url = require("url");
const ip = "127.0.0.1";
const port = 5000;

const server = http
  .createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    if (pathname === "/") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Bienvenidos</h1>");
    } else if (pathname === "/about") {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>About</h1>");
    } else {
      res.writeHead(404, { "Content-Type": "text/html" });
      console.log(res.statusCode);
      res.end(`<h1>${res.statusCode} archivo no encontradoo</h1>`);
    }
  })
  .listen(port, ip);

console.log(`Server running at http://${ip}:${port}/`);