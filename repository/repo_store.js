const dbConnection = require("../configs/db_config")

class StoreRepo {
    async fetchAllStores(userId) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("select * from store where owner_id = ?", [userId], (err, res) => {
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No store registered against this owner" })
                else resolve({ status: 200, data: res })
            })
        })
    }
    async deleteStore(userId, storeId) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("delete from store where owner_id=? and id =?", [userId, storeId], (err, res) => {
                if (err) reject({ status: 500, message: err.message })
                else if (res.affectedRows == 0) reject({ status: 404, message: "Didn't find any store" })
                else resolve({ status: 201, message: "Store has been deleted Successfully" })
            })
        })
    }
    async createStore(userId, store) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("insert into store(owner_id,store_name,latitude,longitude,address) values(?,?,?,?,?)",
                [userId, store.name, store.latitude, store.longitude, store.address], (err, res) => {
                    if (err) reject({ status: 500, message: err.message })
                    else if (res.affectedRows == 0) reject({ status: 500, message: "Couldn't create store" })
                    else resolve({ status: 201, message: "Store has been created Successfully" })
                })
        })
    }
    async updateStore(userId, store) { 
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("update store set store_name=?,latitude=?,longitude=?,address=? where owner_id=?, and id = ?",
                [store.name, store.latitude, store.longitude, store.address,userId,store.store_id], (err, res) => {
                    if (err) reject({ status: 500, message: err.message })
                    else if (res.affectedRows == 0) reject({ status: 500, message: "Couldn't update store" })
                    else resolve({ status: 201, message: "Store has been updated Successfully" })
                })
        })

    }
}

module.exports = {
    storeRepo: new StoreRepo()
}