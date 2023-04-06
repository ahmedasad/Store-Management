const express = require('express')
const UserService = require('../service/service_user')

const userService = new UserService()
const route = express()


route.post('/if_user_exist', async (req, res) => {
    try {
        const response = await userService.ifUserExist()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.post('/login_user', async (req, res) => {
    try {
        const response = await userService.loginUser()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.get('/fetch_all_employes', async (req, res) => {
    try {
        const response = await userService.fetchAllEmployes()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.post('/create_user', async (req, res) => {
    try {
        const response = await userService.createUser()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.post('/create_employee', async (req, res) => {
    try {
        const response = await userService.createEmployee()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.put('/update_profile', async (req, res) => {
    try {
        const response = await userService.updateProfile()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.delete('/delete_employee_profile', async (req, res) => {
    try {
        const response = await userService.deleteEmployeeProfile()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

module.exports = route