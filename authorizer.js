const jwt = require('jsonwebtoken')

module.exports = {
    authenticateToken(req,res,next){
        let authToken = req.headers["token"]
        if(authToken==null){
            return res.status(401).json({status: 401, message: "Please provide access token"})
        }
        jwt.verify(authToken,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{
            if(err) return res.json({message:err.message})
            else req.user = user.u
            next()
         })
        
    }
}