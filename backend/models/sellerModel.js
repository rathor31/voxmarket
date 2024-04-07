const {Schema, model}=require('../connection');

const sellerSchema = new Schema({
    fname:String,
    lname:String,
    email:String,
    password:String,
})

module.exports= model('seller',sellerSchema)