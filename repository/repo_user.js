const dbConnection = require('../configs/db_config')

dbConnection.connection

class UserRepo {

    async ifUserExist(phoneNumber) {
        return new Promise((resolve, reject) => {
            dbConnection.connection.query("select * from user where phone_number = ?", [phoneNumber], (err, res) => {
                
                if (err) reject({ status: 500, message: err.message });
                else if (!res.length) reject({ status: 404, message: "No user found" });
                else resolve({ status: 200, data: true })
            })
        })
    }
}



module.exports = {
    userRepo: new UserRepo()
}