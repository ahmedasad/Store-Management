const storeRepo = require('../repository/repo_store').storeRepo

class StoreService{
    async fetchAllStores(userId){
        return await storeRepo.fetchAllStores(userId)
    }
    async deleteStore(userId,storeId){
        return await storeRepo.deleteStore(userId,storeId)
    }
    async createStore(userId,store){
        return await storeRepo.createStore(userId,store)
    }
    async updateStore(userId,store){
        return await storeRepo.updateStore(userId,store)
    }
}

module.exports = StoreService