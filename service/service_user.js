const userRepo = require('../repository/repo_user').userRepo

class UserService {
    async ifUserExist(phone_number) { 
        return await userRepo.ifUserExist("31232313")
    }
    async loginUser() { }
    async fetchAllEmployes() { 

    }
    async createUser() { }
    async createEmployee() { }
    async updateProfile() { }
    async updatePassword() { }
    async deleteEmployeeProfile() { }
}

module.exports = UserService