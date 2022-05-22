const { v4: uuid4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(produto) {
        const produto_id = uuid4();
        produto.produto_id = produto_id;

        const result = await connection("produto").insert(produto);
        return result;
    },

    async getByID(produto_id){
        const result = await connection("produto")      
            .where({ produto_id })
            .select("*")
            .first()
        return result;
    },

    async updateById(produto_id, produto) {
        const result = await connection("produto")
        .where({ produto_id })
        .update(produto);
        return result;
    },
    async deleteById(produto_id) {
        const result = await connection("produto").where({ produto_id }).delete();
        return result;
    },
};