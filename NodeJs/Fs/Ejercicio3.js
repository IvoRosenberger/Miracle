const http = require("http");
const fs = require("fs");
const { error } = require("console");

const server = http.createServer((req, res) => {
  fs.readFile("vistas/about.html", "utf-8", (err, data) => {
    if (err) throw error;
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end("Entregado");
  });
});

server.listen(5000, "localhost");