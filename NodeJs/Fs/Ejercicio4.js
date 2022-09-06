const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      fs.readFile("vistas/index.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      });
      break;
    case "/contact":
      fs.readFile("vistas/contact.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      });
      break;
    case "/about":
      fs.readFile("vistas/about.html", "utf-8", (err, data) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
      });
      break;
    default:
      res.statusCode = 404;
      res.write("ERROR 404");
      res.end(" Not found");
      break;
  }
});
server.listen(3000, "localhost");