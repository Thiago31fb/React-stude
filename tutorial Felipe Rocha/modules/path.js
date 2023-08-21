const path = require("path");

// apenas o nome do arquivo atual 
console.log(path.basename(__filename));

// apenas o nome do diretorio atual 
console.log(path.dirname(__filename));

// extensao do arquivo 
console.log(path.extname(__filename));

//criar um objeto path
console.log(path.parse(__filename));

//junta caminho de arquivos
console.log(path.join(__dirname, "teste", "teste.html"));
console.log(__dirname);
