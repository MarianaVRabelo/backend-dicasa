const { celebrate, Segments , Joi} = require ('celebrate');


module.exports = {
    create: celebrate({
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }),
    getById: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.QUERY]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).optional(),
        }), 
        [Segments.BODY]: Joi.object().keys({

        }),
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }), 

    delete: celebrate({
        [Segments.PARAMS]: Joi.object().keys({
            user_id: Joi.string().guid({version:["uuidv4"]}).required(),
            produto_id: Joi.string().guid({version:["uuidv4"]}).required(),
        }), 
        [Segments.HEADERS]: Joi.object()
        .keys({
          authorization: Joi.string().required(),
        })
        .unknown(),
    }), 
};