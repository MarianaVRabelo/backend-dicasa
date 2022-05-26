const { celebrate, Segments , Joi} = require ('celebrate'); 


module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({

        }),

    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.QUERY]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).optional(),
        }), 
    }), 

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).required(),
            produto_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
    }), 
};