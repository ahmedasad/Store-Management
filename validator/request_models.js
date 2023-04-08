const Joi = require('joi')

module.exports = {
    phoneExist: Joi.object().keys({ phone_number: Joi.string().max(13).min(13).required() })
}
