const ProdutoUserModel = require("../models/ProdutoUserModel");

module.exports = {
    async create(request, response) {
        try {
            const produtouser = request.body;
            const result = await ProdutoUserModel.create(produtouser);

            return response.status(200).json(result);

        } catch (err) {
            console.log("ProdutoUser creation failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to create ProdutoUser",
            });
        }
    },

    async getById(request, response) {
        try {
            const { user_id } = request.params;
            const result = await User.getById(user_id);

            return response.status(200).json(result);
        } catch (err) {
            console.log("ProdutoUser getById failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to get ProdutoUser",
            }); 
        }
    },

    async delete(request, response) {
        try {
            const { user_id } = request.params;
            const result = await ProdutoUserModel.deleteById(user_id);
            
            if(result === 0)
                return response.status(400).json({ notification: "user_id not found"})
            return response.status(200).json({ notification: "ProdutoUser deleted sucessfully" });
        } catch (err) {
            console.log("ProdutoUser delete failed: " + err);

            return response.status(500).json({
                notification: "Internal server error while trying to delete ProdutoUser",
            });
        }
    },
};

