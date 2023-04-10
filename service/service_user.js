const userRepo = require('../repository/repo_user').userRepo
const jwt = require("jsonwebtoken")

class UserService {

    async ifUserExist(phone_number) { return await userRepo.createUserIfNotExist(phone_number) }

    async verifyPhoneNumber(phone_number, code) { return await userRepo.verifyPhoneNumber(phone_number, code) }

    async loginUser(phone_number, password) {
        console.log(phone_number)
        const user = await userRepo.login(phone_number, password)
        if (user.status == 200) {
            delete user.data.password
            const u = user.data
            console.log(user)
            user.data.token = jwt.sign({ u }, process.env.ACCESS_TOKEN_SECRET);
        }

        return user
    }

    async fetchAllEmployes(owner_id) { return await userRepo.fetchAllEmployee(owner_id) }

    async createEmployee(owner_id, employee) { return await userRepo.createEmployee(owner_id, employee) }

    async updateProfile(user_id,user) { return await userRepo.updateProfile(user_id,user) }

    async updatePassword(user_id, oldPassword, newPassword) {
        return await userRepo.updatePassword(user_id, oldPassword, newPassword)
    }

    async deleteEmployeeProfile(owner_id, employee_id) {
        return await userRepo.deleteEmployee(owner_id, employee_id)
    }
}

module.exports = UserService