const mongoose = require('mongoose');





const UserSchema = new mongoose.Schema({
    name: String,
    description: String,
    district: String,

})


module.exports = mongoose.model('User',UserSchema);