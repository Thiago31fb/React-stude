// cd "tutorial Felipe Node"
// npm init
// npm install nodemon --save-dev
// npm install (instalar as dependencias "caso clonar o repositorio do git")
// npm run start:dev
// npm install express
// npm run start:dev
// npm install mongoose
// npm install dotenv
// npm install ejs

// const { Person } = require("./person");
// const person = new Person("Thiago");

// console.log(person.sayMyname());

const dotenv = require("dotenv");
const connectToDatabase = require("./src/database/connect");
dotenv.config();
connectToDatabase();

// require("./modules/path");
// require("./modules/fs");
// require("./modules/http");
require("./modules/express");

