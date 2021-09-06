const router = require("express").Router();

module.exports = router;

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user_id: {type: String},
    orgs: [{ type: String }],
    //n: {type: Number}
});

const User = mongoose.model('User', userSchema);

module.exports = User;