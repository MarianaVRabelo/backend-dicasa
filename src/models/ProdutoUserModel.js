const connection = require("../database/connection");

module.exports = {
    async create(produto) {
        const result = await connection("produto").insert(produto);
        return result;
    },

    async getByID({ produto_id, user_id}) {
        const result = await connection("produto")
         .where({ produto_id, user_id })
         .select("*")
         .first();
        return result;
    },
};