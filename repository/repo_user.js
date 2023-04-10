const dbConnection = require('../configs/db_config')
const helper = require('../helper/helper')
dbConnection.connection

class UserRepo {

    async createUserIfNotExist(phoneNumber) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("insert ignore into user (phone_number,verification_code) values(?,?) ", [phoneNumber,helper.verification_code],
            (err, res) => {
                console.log(phoneNumber)

                if (err) reject({ status: 500, message: err.message });
                else if(res.affectedRows == 1) resolve({ status: 200, data: "Verification code has been sent" })
                else reject({ status: 409, message: "Account already exist" })
            })
        })
    }

    async verifyPhoneNumber(phoneNumber,code) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("update user set account_verified = 1 where phone_number = ? and verification_code = ?", [phoneNumber,code], (err, res) => {
    
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows == 1) reject({ status: 200, message: "Phone has been verified" });
                else resolve({ status: 200, message:"Invalid Code" })
            })
        })
    }

    async login(phoneNumber,password) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("select * from user where phone_number = ? ", [phoneNumber], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No user found" });
                else if(res[0].password != password) return reject({ status: 401, message: "Password is not correct" })

                else resolve({ status: 200, data: res[0] })
            })
        })
    }

    async fetchAllEmployee(owner_id) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("select * from user where owner_id = ? ", [owner_id], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No user found" });
                else resolve({ status: 200, data: true })
            })
        })
    }

    async createEmployee(owner_id,employee) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("insert into user (name,phone_number,role,verification_code,password) values (?,?,?,?,?)",
            [employee.name,employee.phone_number,owner_id,helper.verification_code,helper.verification_code], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows==0) reject({ status: 404, message: "User already exist against this number" });
                else resolve({ status: 200, data: true })
            })
        })
    }

    async updateProfile(user_id,user) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("update user set name=?,email=?,image =? where id = ?", [user.name,user.email,user.image?user.image:null,user_id], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows==1) resolve({ status: 200, message: "Profile updated successfully" });
                else reject({ status: 200, data: true })
            })
        })
    }

    async updatePassword(user_id,oldPassword,newPassword) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("update user set password = ? where id = ? and password = ?", [newPassword,user_id,oldPassword], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows==0) reject({ status: 401, message: "Old password is invalid" });
                else resolve({ status: 200, message: "Password updated successfully" })
            })
        })
    }

    async deleteEmployee(owner_id,employee_id) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("delete from user where role = ? and id = ?", [owner_id,employee_id], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (res.affectedRows>0) resolve({ status: 200, message: "Employee deleted successfully" });
                else reject({ status: 500, message: "No employee exist" })
            })
        })
    }
}



module.exports = {
    userRepo: new UserRepo()
}