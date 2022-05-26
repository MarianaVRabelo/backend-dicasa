const express = require('express');
const routes = express.Router();

const UserValidator=require("./validators/UserValidator")
const UserController = require("./controllers/UserController");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoValidator=require("./validators/ProdutoValidator")
const ProdutoUserController = require("./controllers/ProdutoUserController");
const ProdutoUserValidator=require("./validators/ProdutoUserValidator");

// Users
routes.get("/users/:user_id", UserValidator.getById, UserController.getById);
routes.post("/users", UserValidator.create, UserController.create);
routes.put("/users/:user_id",UserValidator.update, UserController.update);
routes.delete("/users/:user_id", UserValidator.delete, UserController.delete);

// Produto
routes.get("/produtosget", ProdutoController.get);
routes.get("/produto/:produto_id",ProdutoValidator.getById, ProdutoController.getById);
routes.post("/produto", ProdutoValidator.create, ProdutoController.create);
routes.put("/produto/:produto_id",ProdutoValidator.update, ProdutoController.update);
routes.delete("/produto/:produto_id",ProdutoValidator.delete, ProdutoController.delete);

//ProfutoUser
routes.get("/produtouser/:user_id", ProdutoUserValidator.getById, ProdutoUserController.getById);
routes.post("/produtouser",ProdutoUserValidator.create, ProdutoUserController.create);
routes.delete("/produtouser/:produto_id/:user_id", ProdutoUserValidator.delete, ProdutoUserController.delete);

module.exports = routes;