const express = require('express')
const InventoryService = require('../service/service_inventory')

const route = express()
const inventoryService = new InventoryService()

route.get('/fetch_all_inventory', async (req, res) => {
    try {
        const response = await inventoryService.fetchAllInventory()
        res.status(response.status).json(response)
    }
    catch (err) { res.status(err.status).json(err) }
})

// will be receiving array of items
route.post('/add_inventory', async (req, res) => {
    try { const response = await inventoryService.addInventory()
        res.status(response.status).json(response) }
    catch (err) { res.status(err.status).json(err) }
})
// will update one item at a time
route.put('/update_invetory', async (req, res) => {
    try { const response = await inventoryService.updateInvetory() 
        res.status(response.status).json(response)}
    catch (err) { res.status(err.status).json(err) }
})

route.put('/approve_inventory', async (req, res) => {
    try { const response = await inventoryService.approveInventory() 
        res.status(response.status).json(response)}
    catch (err) { res.status(err.status).json(err) }

})


module.exports = route