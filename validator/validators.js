const requestModels = require('../validator/request_models')

class AppValidator {
    validatePhone = function (req, res, next) {
        const { error } = requestModels.phoneExist.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    validatePhoneVerification = function (req, res, next) {
        const { error } = requestModels.verifyPhoneNumber.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    validateLogin = function (req, res, next) {
        const { error } = requestModels.login.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    validateUpdateUser = function (req, res, next) {
        const { error } = requestModels.updateUser.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    validateUpdatePassword = function (req, res, next) {
        const { error } = requestModels.updatePassword.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    
}

module.exports = {
    appValidator: new AppValidator()
}