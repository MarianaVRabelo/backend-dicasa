const { celebrate, Segments , Joi} = require ('celebrate');


module.exports = {
    create: celebrate({
        [Segments.BODY]: Joi.object().keys({
            titulo: Joi.string().required(),
            valor: Joi.string().required(),
            imagem:Joi.string().required(),
        }),
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.QUERY]: Joi.object().keys({
            produto_id: Joi.string().guid({version:["uuidv4"]}).optional(),
        }), 
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }), 
    update: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.BODY]: Joi.object().keys({
            titulo: Joi.string().optional(),
            valor: Joi.string().optional(),
            imagem:Joi.string().optional(),
            
        }),
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),

    }),

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            produto_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }), 
};