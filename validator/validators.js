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

    // Store

    createStore = function (req, res, next) {
        const { error } = requestModels.createStore.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    
    updateStore = function (req, res, next) {
        const { error } = requestModels.updateStore.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }
    validateDeleteStore = function (req, res, next) {
        const { error } = requestModels.deleteStore.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()

    }

    validateFetchStoreInventory = function (req, res, next) {
        const { error } = requestModels.fetchStoreInvetory.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()
    }

    validateUpdateAndAddInvetory = function (req, res, next) {
        const { error } = requestModels.addInvetory.validate(req.body)
        if (error) return res.status(409).json({ status: 409, message: error.message })
        next()
    }

}

module.exports = {
    appValidator: new AppValidator()
}