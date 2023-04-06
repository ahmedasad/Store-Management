const express = require('express')
const StoreService = require('../service/service_store')

const route = express()
const storeService = new StoreService()

route.get('/fetch_all_stores', async (req, res) => {
    try {
        const response = await storeService.fetchAllStores()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.delete('/delete_store', async (req, res) => {
    try {
        const response = await storeService.deleteStore()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.post('/create_store', async (req, res) => {
    try {
        const response = await storeService.createStore()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
route.put('/update_store', async (req, res) => {
    try {
        const response = await storeService.updateStore()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

module.exports = route