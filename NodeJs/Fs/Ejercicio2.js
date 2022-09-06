const fs = require("fs");

fs.readFile("complementos/texto.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});