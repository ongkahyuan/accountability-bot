const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    group: {
        type: [mongoose.Types.ObjectId],
    },
    chatID: {
        type: String,
    }
});

const user = mongoose.model('user', userSchema);
module.exports = user;