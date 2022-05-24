const connection = require("../database/connection");

module.exports = {
    async create(produtouser) {

        const result = await connection("produto_user")
        .insert(produtouser);
        return result;
    },

    async getById({user_id}) {
        const result = await connection("produto_user")
         .where({ user_id })
         .select("*");
        return result;
    },

    async deleteById({produto_id, user_id}) {
        const result = await connection("produto_user")
        .where({ produto_id, user_id })
        .delete();
        return result;
    },
};