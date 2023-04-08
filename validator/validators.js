const requestModels = require('../validator/request_models')

class AppValidator {
    validPhone = function (req, res, next) {
        const { error } = requestModels.phoneExist.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
}

module.exports = {
    appValidator: new AppValidator()
}