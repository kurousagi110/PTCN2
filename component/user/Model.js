const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectID = Schema.ObjectId;

const userSchema = new Schema({
    id: {type: ObjectID},
    username: { type : String},
    password: { type : String},
    name: { type : String},
    phonenumber: { type : String},
    status: { type : Number},
});

module.exports =mongoose.models.users || mongoose.model('user', userSchema);