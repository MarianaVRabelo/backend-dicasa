const { v4: uuid4 } = require('uuid');
const connection = require("../database/connection");

module.exports = {
    async create(user) {
        const user_id = uuid4();
        user.user_id = user_id;

        await connection("user").insert(user);
        return user_id;
    },

    async getByID(user_id){
        const result = await connection("user")
            .where({ user_id })
            .select("*")
            .first();
        return result;
    },

    async updateById(user_id, user) {
        const result = await connection("user")
        .where({ user_id })
        .update(user);
        return result;
    },
    async deleteById(user_id) {
        const result = await connection("user").where({ user_id }).delete();
        return result;
    },
};