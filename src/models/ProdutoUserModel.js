const connection = require("../database/connection");

module.exports = {
    async create({user_id, produto_id}) {
        
        const result = await connection("produtouser")
        .insert(user_id, produto_id);
        return result;
    },

    async getById({user_id}) {
        const result = await connection("produtouser")
         .where({ user_id })
         .select("*")
         .first();
        return result;
    },

    async deleteById({user_id}) {
        const result = await connection("produtouser").where({ user_id }).delete();
        return result;
    },
};