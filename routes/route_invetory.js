const express = require('express')
const InventoryService = require('../service/service_inventory')
const authoriser = require('../authorizer')
const appValidator = require('../validator/validators').appValidator

const route = express()
const inventoryService = new InventoryService()


// fetch all inventory
// add inventory 
// fetch product request
// create product request
// approve product request

// add requested inventory / update inventory

route.get('/fetch_all_inventory', authoriser.authenticateToken, async (req, res) => {
    try {
        const response = await inventoryService.fetchAllInventory(req.user.id)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.get('/fetch_store_inventory', authoriser.authenticateToken, appValidator.validateFetchStoreInventory,
    async (req, res) => {
        try {
            const response = await inventoryService.fetchStoreInventory(req.user.id, req.body.store_id)
            res.status(response.status).json(response)
        }
        catch (err) { res.status(err.status).json(err) }
    })

// will be receiving array of items
route.post('/add_inventory', authoriser.authenticateToken, appValidator.validateUpdateAndAddInvetory, async (req, res) => {
    try {
        const response = await inventoryService.addInventory(req.user.id, req.body.items)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})
// will update one item at a time
route.put('/update_invetory',authoriser.authenticateToken, appValidator.validateUpdateAndAddInvetory, async (req, res) => {
    try {
        const response = await inventoryService.addInventory(req.user.id, req.body.items)
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

route.put('/approve_inventory', async (req, res) => {
    try {
        const response = await inventoryService.approveInventory()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }

})


module.exports = route