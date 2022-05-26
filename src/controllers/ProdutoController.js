const ProdutoModel = require("../models/ProdutoModel");

const produtosDicasa = [
    {
        id: 1,
        src:"/images/Rectangle61.png",
        title: "Combo Sanduíche + Suco",
        description: "R$ 20,00",
        
    },
    {
        id: 2,
        src:"/images/Rectangle30.png",
        title: "Tapioca",
        description: "R$ 10,00",
    },
    {
        id: 3,
        src:"/images/Rectangle63.png",
        title: "Crepioca",
        description: "R$ 12,00",
    },
    {
        id: 4,
        src:"/images/Rectangle64.png",
        title: "Pastel Assado",
        description: "R$ 9,00",
    },
    {
        id: 5,
        src:"/images/Rectangle65.png",
        title: "Sanduíche Natural",
        description: "R$ 15,00",
    },
    {
        id: 6,
        src:"/images/Rectangle66.png",
        title: "Salada de Frutas",
        description: "R$ 10,00",
    },
    {
        id: 7,
        src:"/images/Rectangle67.png",
        title: "Salada Caesar",
        description: "R$ 15,00",
    },
    {
        id: 8,
        src:"/images/Rectangle68.png",
        title: "Saalada Tropical",
        description: "R$ 12,00",
    },
    {
        id: 9,
        src:"/images/Rectangle69.png",
        title: "Omelete",
        description: "R$ 13,50",
    },
    {
        id: 10,
        src:"/images/Rectangle70.png",
        title: "Suco Verde",
        description: "R$ 8,00",
    },
    {
        id: 11,
        src:"/images/Rectangle71.png",
        title: "Suco Natural",
        description: "R$ 6,00",
    },
    {
        id: 12,
        src:"/images/Rectangle72.png",
        title: "Vitamina",
        description: "R$ 9,00",
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