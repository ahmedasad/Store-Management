 const EntitySchema = require('typeorm').EntitySchema

module.exports = new EntitySchema({
    name: "user",
    columns:{
        id:{
            primary:true,
            type:int,
            generated: true
        },
        name:{type:'varchar'},
        phone_number:{type:'text'},
        image:{type:'text'},
        password:{type:'text'},
        email:{type:'text'},
        role:{type:'varchar'},
    }
    
});