const mongoose = required('mongoose');





const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    district: String,

})


module.exports = mongoose.module('User',UserSchema);