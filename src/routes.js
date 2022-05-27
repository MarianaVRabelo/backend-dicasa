const express = require('express');
const routes = express.Router();

const ProdutoUserValidator=require("./validators/ProdutoUserValidator");
const UserValidator=require("./validators/UserValidator")
const UserController = require("./controllers/UserController");
const ProdutoController = require("./controllers/ProdutoController");
const ProdutoValidator=require("./validators/ProdutoValidator")
const ProdutoUserController = require("./controllers/ProdutoUserController");
const SessionController = require("./controllers/SessionController");

const auth= require("./middlewares/authentication");

//Session
routes.post("/login", SessionController.signIn)

// Users
routes.get
("/users/:user_id",
UserValidator.getById,
auth.authenticateToken,
UserController.getById);

routes.post(
"/users", 
UserValidator.create,
UserController.create);

routes.put
("/users/:user_id",
UserValidator.update, 
auth.authenticateToken,
UserController.update);

routes.delete
("/users/:user_id",
UserValidator.delete,
auth.authenticateToken,
UserController.delete);

// Produto
routes.get
("/produto/:produto_id",
ProdutoValidator.getById,
auth.authenticateToken,
ProdutoController.getById);
routes.get("/produtosget", ProdutoController.get);

routes.post
("/produto",
ProdutoValidator.create, 
auth.authenticateToken,
ProdutoController.create);

routes.put
("/produto/:produto_id",
ProdutoValidator.update, 
auth.authenticateToken,
ProdutoController.update);

routes.delete(
"/produto/:produto_id",
ProdutoValidator.delete,
auth.authenticateToken,
ProdutoController.delete);

//ProdutoUser
routes.get(
"/produtouser/:user_id",
ProdutoUserValidator.getById,
auth.authenticateToken,
ProdutoUserController.getById);

routes.post(
"/produtouser",
ProdutoUserValidator.create,
auth.authenticateToken,
ProdutoUserController.create);

routes.delete(
"/produtouser/:produto_id/:user_id",
ProdutoUserValidator.delete,
auth.authenticateToken,
ProdutoUserController.delete);







module.exports = routes;