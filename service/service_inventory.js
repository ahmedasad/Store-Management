const inventoryRepo = require('../repository/repo_inventory').inventoryRepo

class InventoryService {
    async fetchAllInventory(ownerId) {
        return await inventoryRepo.fetchAllInventory(ownerId)
    }
    async fetchStoreInventory(ownerId, storeId) {
        return await inventoryRepo.fetchAllInventory(ownerId, storeId)
    }
    async addInventory(ownerId, inventoryItems) {
        try {
            const unregisteredProducts = inventoryItems.filter(item => item.product_id == null)
            if (unregisteredProducts.length > 0) {
                await inventoryRepo.addProduct(ownerId, unregisteredProducts)
                let products = await inventoryRepo.fetchProductIdsWithName(unregisteredProducts)
                inventoryItems.map(item => {
                    if (item.product_id == null) item.product_name =
                        products.find(prod => item.product_name == prod.name).name
                })
            }

            await inventoryRepo.addInventory(ownerId, inventoryItems)

        } catch (err) {
            return { status: 500, message: "Intenal server error" }
        }




    }
    async updateInvetory(ownerId, inventoryItems) {
        return await inventoryRepo.fetchAllInventory(ownerId, storeId)
     }
    async approveInventory() { }
}

module.exports = InventoryService