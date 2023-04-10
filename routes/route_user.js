const express = require('express')
const UserService = require('../service/service_user')
const appValidator = require('../validator/validators').appValidator
const authoriser = require('../authorizer')

const userService = new UserService()

const route = express()


route.post('/if_user_exist', appValidator.validatePhone, async (req, res) => {
    try {
        const response = await userService.ifUserExist(req.body.phone_number)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.post('/verify_phone_number', appValidator.validatePhoneVerification, async (req, res) => {
    try {
        const response = await userService.verifyPhoneNumber(req.body.phone_number,req.body.verification_code)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.post('/login_user', appValidator.validateLogin, async (req, res) => {
    try {
        const response = await userService.loginUser(req.body.phone_number,req.body.password)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.get('/fetch_all_employes', authoriser.authenticateToken, async (req, res) => {
    try {
        const response = await userService.fetchAllEmployes(req.user.user_id)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.post('/create_employee',appValidator.validateUpdateUser,authoriser.authenticateToken, async (req, res) => {
    try {
        const response = await userService.createEmployee(req.user.id, req.body)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.put('/update_profile',authoriser.authenticateToken,appValidator.validateUpdateUser, async (req, res) => {
    try {
        const response = await userService.updateProfile(req.user.id,req.body)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.put('/update_password', appValidator.validateUpdatePassword, authoriser.authenticateToken, async (req, res) => {
    try {
        const response = await userService.updatePassword(req.user.id, req.body.old_password,req.body.new_password)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.delete('/delete_employee_profile', authoriser.authenticateToken, async (req, res) => {
    try {
        console.log(req.user.id)
        const response = await userService.deleteEmployeeProfile(req.user.id, req.body.employee_id)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

module.exports = route