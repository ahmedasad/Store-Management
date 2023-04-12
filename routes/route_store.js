const express = require('express')
const StoreService = require('../service/service_store')
const authoriser = require('../authorizer')
const appValidator = require('../validator/validators').appValidator

const route = express()
const storeService = new StoreService()

route.get('/fetch_all_stores', authoriser.authenticateToken, async (req, res) => {
    try {
        const response = await storeService.fetchAllStores(req.user.id)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.delete('/delete_store', authoriser.authenticateToken,appValidator.validateDeleteStore, async (req, res) => {
    try {
        const response = await storeService.deleteStore(req.user.id,req.body.store_id)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.post('/create_store', authoriser.authenticateToken, appValidator.createStore, async (req, res) => {
    try {
        const response = await storeService.createStore(req.user.id,req.body)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.put('/update_store', authoriser.authenticateToken, appValidator.updateStore, async (req, res) => {
    try {
        const response = await storeService.updateStore(req.user.id,req.body)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

module.exports = route