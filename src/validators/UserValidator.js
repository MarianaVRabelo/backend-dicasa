const { celebrate, Segments , Joi} = require ('celebrate');


module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            nome: Joi.string().required(),
            email: Joi.string().email().required(),
            endereço:Joi.string().required(),
            cidade: Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 
        [Segments.QUERY]: Joi.object().keys({
            user_id: Joi.string().guild({version:["uuidv4"]}).optional(),
        }), 
    }), 
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 
    }),
        [Segments.BODY]: Joi.object().keys({
        nome: Joi.string().optional(),
        email: Joi.string().email().optional(),
        endereço:Joi.string().optional(),
        cidade: Joi.string().optional(),
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 
    }), 
};