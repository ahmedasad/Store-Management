const Joi = require('joi')

module.exports = {
    phoneExist: Joi.object().keys({ phone_number: Joi.string().max(13).min(13).required() }),
    verifyPhoneNumber: Joi.object().keys({
        phone_number: Joi.string().max(13).min(13).required(),
        verification_code: Joi.string().max(6).min(6).required(),
    }),
    login: Joi.object().keys({
        phone_number: Joi.string().max(13).min(13).required(),
        password: Joi.string().min(3).required()
    }),
    updateUser: Joi.object().keys({
        name: Joi.string().min(3).required(),
        email: Joi.string().email().required(),
        image: Joi.string()
    }),
    createEmployee: Joi.object().keys({
        name: Joi.string().min(3).required(),
        phone_number: Joi.string().max(13).min(13).required(),
    }),
    updatePassword: Joi.object().keys({
        old_password: Joi.string().min(3).required(),
        new_password: Joi.string().min(3).disallow(Joi.ref('old_password')).required()
    }),

    // STORE

    createStore: Joi.object().keys({
        name: Joi.string().min(3).required(),
        latitude: Joi.string().min(3).required(),
        longitude: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
    }),

    updateStore: Joi.object().keys({
        store_id: Joi.string().required(),
        name: Joi.string().min(3).required(),
        latitude: Joi.string().min(3).required(),
        longitude: Joi.string().min(3).required(),
        address: Joi.string().min(3).required(),
    }),

    deleteStore: Joi.object().keys({
        store_id: Joi.string().required(),
    })
}
