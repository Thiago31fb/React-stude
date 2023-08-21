const { error } = require("console");
const fs = require("fs");
const path = require("path");

// // criar uma pasta
// fs.mkdir(path.join(__dirname, "/teste"), (error) => {
//   if (error) {
//     // se a pasta ja existir vai ficar dando erro
//     return console.log("Erro; ", error);
//   }
//   console.log("Pasta criada com sucesso!");
// });


// o do video tava assim (acho oq esse e a melhor pratica)
// criar uma arquivo
fs.writeFile(
  path.join(__dirname, "/teste", "teste.txt"),
  "Hello Node! ",
  (error) => {
    if (error) {
      // se a pasta ja existir vai ficar dando erro
      return console.log("Erro; ", error);
    }
    console.log("Arquivo criada com sucesso!");
    // add conteudo
    fs.appendFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "Hello World! ",
      (error) => {
        if (error) {
          // se a pasta ja existir vai ficar dando erro
          return console.log("Erro; ", error);
        }
        console.log("Arquivo modificado com sucesso!");
      }
    );
    // ler arquivo
    fs.readFile(
      path.join(__dirname, "/teste", "teste.txt"),
      "utf-8",
      (error, data) => {
        if (error) {
          // se a pasta ja existir vai ficar dando erro
          return console.log("Erro; ", error);
        }
        console.log(data);
      }
    );
  }
);

// // o meu funcionou assim
// // criar uma arquivo
// fs.writeFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "Hello Node! ",
//   (error) => {
//     if (error) {
//       // se a pasta ja existir vai ficar dando erro
//       return console.log("Erro; ", error);
//     }
//     console.log("Arquivo criada com sucesso!");
//   }
// );

// // add conteudo
// fs.appendFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "Hello World! ",
//   (error) => {
//     if (error) {
//       // se a pasta ja existir vai ficar dando erro
//       return console.log("Erro; ", error);
//     }
//     console.log("Arquivo modificado com sucesso!");
//   }
// );
// // ler arquivo
// fs.readFile(
//   path.join(__dirname, "/teste", "teste.txt"),
//   "utf-8",
//   (error, data) => {
//     if (error) {
//       // se a pasta ja existir vai ficar dando erro
//       return console.log("Erro; ", error);
//     }
//     console.log(data);
//   }
// );