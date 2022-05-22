const UserModel = require("../models/UserModel");

module.exports = {
    async create(request, response) {
        try {
            const newUser = request.body;
            const result = await UserModel.create(newUser);


            return response.status(200).json(result);
            
        } catch (error) {
            console.warn("User creation failed:", error);

            return response.status(500).json({
                notification: "Internal server error while trying to create User"})
        }
    },

    async getByID(request, response) {
        try {

        } catch (error) {
            
        }
    },

    async update(request, response) {
        try {

        } catch (error) {
            
        }
    },

    async delete(request, response) {
        try {

        } catch (error) {
            
        }
    },
};