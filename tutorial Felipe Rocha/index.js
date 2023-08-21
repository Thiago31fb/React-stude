// cd "tutorial Felipe Rocha"
// npm init
// npm install nodemon --save-dev
// npm install (instalar as dependencias "caso clonar o repositorio do git")
// npm run start:dev
// npm install express
// npm run start:dev
const { Person } = require("./person");

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

const person = new Person("Thiago");

// console.log(person.sayMyname());
