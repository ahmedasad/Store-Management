const dbconnection = require('../configs/db_config')

class InventoryRepo {

    async fetchAllInventory(ownerId) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`select * from store_inventory 
            join product on product.id = store_inventory.product_id and store_inventory.owner_id = ?`, [ownerId], (err, res) => {
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No Inventory added yet" })
                else resolve({ status: 200, data: res })
            })
        })
    }

    async fetchStoreInventory(ownerId, storeId) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`select * from store_inventory 
            join product on product.id = store_inventory.product_id and store_inventory.owner_id = ? and store_inventory.store_id=?`,
                [ownerId, storeId], (err, res) => {
                    if (err) reject({ status: 500, message: err.message });
                    else if (!res.length) reject({ status: 404, message: "No Inventory added yet" })
                    else resolve({ status: 200, data: res })
                })
        })
    }

    async addInventory(ownerId, inventory) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`insert into store_inventory(owner_id, store_id, product_id,quntity) values ?`,
                [inventory.map(item => { if (inventory.product_id != null) [ownerId, item.store_id, item.product_id, item.quantity] })],
                (err, res) => {
                    if (err) reject({ status: 500, message: err.message });
                    else if (res.affectedRows > 0) resolve({ status: 201, message: "New items added" })
                    else reject({ status: 400, message: "error occurred" })
                })
        })
    }

    async addProduct(ownerId, prodcutNames) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`insert into product(owner_id, product_name) values`,
                [prodcutNames.map(item =>  [ownerId, item.product_name] )],
                (err, res) => {
                    if (err) reject({ status: 500, message: err.message });
                    else if (res.affectedRows > 0) resolve({ status: 201, message: "New items added" })
                    else reject({ status: 400, message: "error occurred" })
                })
        })
    }

    async fetchProductIdsWithName(prodcutNames) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`select id,name from product where name in (?)`,
                [prodcutNames.toString()],
                (err, res) => {
                    if (err) reject({ status: 500, message: err.message });
                    else if (!res.length) reject({ status: 404, message: "No item found" })
                    else resolve({ status: 200, resolve: res })
                })
        })
    }

    async updateInventory(ownerId, inventory) {
        return new Promise((resolve, reject) => {
            dbconnection.connection.query(`update store_inventory set quantity = ? where store_id =? and product_id=?,owner_id=?`,
                [inventory.quantity,inventory.store_id.inventory.product_id,ownerId],
                (err, res) => {
                    if (err) reject({ status: 500, message: err.message });
                    else if (res.affectedRows > 0) resolve({ status: 201, message: "New items added" })
                    else reject({ status: 400, message: "error occurred" })
                })
        })
    }

}

module.exports = {
    inventoryRepo: new InventoryRepo()
}