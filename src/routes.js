const express = require('express');
const routes = express.Router();

const UserController = require("./controllers/UserController");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoUserController = require("./controllers/ProdutoUserController");

// Users
routes.get("/users/:user_id", UserController.getById);
routes.post("/users", UserController.create);
routes.put("/users/:user_id", UserController.update);
routes.delete("/users/:user_id", UserController.delete);

// Produto
routes.get("/produto/:produto_id", ProdutoController.getById);
routes.post("/produto", ProdutoController.create);
routes.put("/produto/:produto_id", ProdutoController.update);
routes.delete("/produto/:produto_id", ProdutoController.delete);

//ProfutoUser
routes.get("/produtouser/:user_id", ProdutoUserController.getById);
routes.post("/produtouser", ProdutoUserController.create);
routes.delete("/produtouser/:produto_id/:user_id", ProdutoUserController.delete);

module.exports = routes;