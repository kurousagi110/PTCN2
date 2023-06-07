const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const productSchema = new Schema({
    id: {type: ObjectID},
    name: { type : String},
    user: {
        nameuser: { type : String},
        phonenumber: { type : String},
    },
    phonenumber: { type : String},
    banknumber: { type : String},
    bankname: { type : String},
    detail: { type : String},
    comment: [{
        username: { type : String},
        text: { type : String},
    }],
    like: { type : Number},
    dislike: { type : Number},
    images: [{
        urlimage: { type : String},
    }],
    date: { type : Date},
    status: { 
        number: {type: Number},
        text: { type : String},
    },
});

module.exports =mongoose.models.products || mongoose.model('product', productSchema);