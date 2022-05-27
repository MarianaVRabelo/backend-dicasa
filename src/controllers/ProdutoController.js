const ProdutoModel = require("../models/ProdutoModel");

const produtosDicasa = [
    {
        id: 1,
        "image":"/images/Rectangle61.png",
        "titulo": "Combo Sanduíche + Suco",
        "valor": "R$ 20,00",
        
    },
    {
        id: 2,
        "image":"/images/Rectangle30.png",
        "titulo": "Tapioca",
        "valor": "R$ 10,00",
    },
    {
        id: 3,
        "imagem":"/images/Rectangle63.png",
        "titulo": "Crepioca",
        "valor": "R$ 12,00",
    },
    {
        id: 4,
        "imagem":"/images/Rectangle64.png",
        "titulo": "Pastel Assado",
        "valor": "R$ 9,00",
    },
    {
        id: 5,
        "imagem":"/images/Rectangle65.png",
        "titulo": "Sanduíche Natural",
        "valor": "R$ 15,00",
    },
    {
        id: 6,
        "imagem":"/images/Rectangle66.png",
        "titulo": "Salada de Frutas",
        "valor": "R$ 10,00",
    },
    {
        id: 7,
        "imagem":"/images/Rectangle67.png",
        "titulo": "Salada Caesar",
        "valor": "R$ 15,00",
    },
    {
        id: 8,
        "imagem":"/images/Rectangle68.png",
        "titulo": "Saalada Tropical",
        "valor": "R$ 12,00",
    },
    {
        id: 9,
        "imagem":"/images/Rectangle69.png",
        "titulo": "Omelete",
        "valor": "R$ 13,50",
    },
    {
        id: 10,
        "imagem":"/images/Rectangle70.png",
        "titulo": "Suco Verde",
        "valor": "R$ 8,00",
    },
    {
        id: 11,
        "imagem":"/images/Rectangle71.png",
        "titulo": "Suco Natural",
        "valor": "R$ 6,00",
    },
    {
        id: 12,
        "imagem":"/images/Rectangle72.png",
        "titulo": "Vitamina",
        "valor": "R$ 9,00",
    },
]

module.exports = {
    async create(request, response) {
        try {
            const newProduto = request.body;
            const result = await ProdutoModel.create(newProduto);


            return response.status(200).json({produto_id: result});

        } catch (error) {
            console.warn("Produto creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create Produto"})
        }
    },

    async getById(request, response) {
        try {
            const { produto_id } = request.params;
            const result = await ProdutoModel.getById(produto_id);

            return response.status(200).json(result);
        } catch (error) {
            console.warn("Produto get failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to get Produto"})
        }
    },

    async get(request, response) {
        try {
            const result = await ProdutoModel.get();

            return response.status(200).json(result);
        } catch (error) {
            console.warn("Produtos get failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to get Produtos"})
        }
    },


    async update(request, response) {
        try {
            const { produto_id } = request.params;
            const newProduto = request.body;
            await ProdutoModel.updateById(produto_id, newProduto);
            

            return response.status(200).json({ notification: "Produto update sucessfully" });
        } catch (error) {
            console.warn("Produto update failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to update Produto"})
        }
    },

    async delete(request, response) {
        try {
            const { produto_id } = request.params;
            const result = await ProdutoModel.deleteById(produto_id);
            
            if(result === 0)
                return response.status(400).json({ notification: "note_id not found"})
            return response.status(200).json({ notification: "Produto deleted sucessfully" });
        } catch (error) {
            console.log("Produto delete failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to delete Produto"})
        }
    },
};