const { Schema, model, Types}=require('../connection');

const orderSchema = new Schema({
    user:{type:Types.ObjectId, ref: 'user'},
    items: Array,
    paymentDetails:{type:Types.ObjectId, ref: 'payment'},
    intentId:String,
    trackingDetails:{type:Types.ObjectId, ref: 'tracking'},
    createdAt:Date

})

module.exports= model('order',orderSchema)