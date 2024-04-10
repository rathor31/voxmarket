const { Schema, model, Types}=require('../connection');

const productSchema = new Schema({
    seller: {type: Types.ObjectId, ref: 'seller'},
    pname:String,
    pdetail:String,
    pcategory:String,
    features: Array,
    pprice:String,
    images: Array,
    createdAt:Date

})

module.exports= model('product',productSchema)