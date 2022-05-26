const UserModel = require("../models/UserModel");

const clientesDicasa = [
    {
        id: 0,
        name: "Mariana Rabelo",
    },
    {
        id: 1,
        name: "Ana Coelho",
    },
    {
        id: 2,
        name: "Leticia Resende",
    },
    {
        id: 3,
        name: "Maria Silva",
    },
    {
        id: 4,
        name: "Julia Castro",
    },
    {
        id: 5,
        name: "Adrianus Vieira",
    },
];

module.exports = {
    async create(request, response) {
        try {
            const user = request.body;
            const result = await UserModel.create(user);

            return response.status(200).json(result);

        } catch (err) {
            console.log("User creation failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to create User",
            });
        }
    },

    async getById(request, response) {
        try {
            const { user_id } = request.params;
            const result = await UserModel.getById(user_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("User getById failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to get User",
            }); 
        }
    },

    async update(request, response) {
        try {
            const { user_id } = request.params;
            const user = request.body;
            await UserModel.updateById(user_id, user);

            return response.status(200).json({ notification: "User update sucessfully" });
        } catch (err) {
            console.log("User update failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to update User",
            });
        }
    },

    async delete(request, response) {
        try {
            const { user_id } = request.params;
            const result = await UserModel.deleteById(user_id);
            
            if(result === 0)
                return response.status(400).json({ notification: "user_id not found"})
            return response.status(200).json({ notification: "User deleted sucessfully" });
        } catch (err) {
            console.log("User delete failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to delete User",
            });
        }
    },
};

