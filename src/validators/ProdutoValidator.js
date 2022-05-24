const { celebrate, Segments , Joi} = require ('celebrate');


module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            titulo: Joi.string().required(),
            valor: Joi.string().required(),
            imagem:Joi.string().required(),
        }),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 
        [Segments.QUERY]: Joi.object().keys({
            produto_id: Joi.string().guild({version:["uuidv4"]}).optional(),
        }), 
    }), 
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 

    }),
        [Segments.BODY]: Joi.object().keys({
        titulo: Joi.string().optional(),
        valor: Joi.string().optional(),
        imagem:Joi.string().optional(),
        
    }),
    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guild({version:["uuidv4"]}).required(),
        }), 
    }), 
};