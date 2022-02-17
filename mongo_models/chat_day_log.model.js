const mongoose = require('mongoose');

const chatDayLogSchema = new mongoose.Schema({
    success: {
        type: Boolean
    },
    group: {
        type: [mongoose.Types.ObjectId]
    },
    day: {
        type: Date,
    },
    activity: {
        type: Boolean,
    }
});

const chatDayLog = mongoose.model('chat_day_log', chatDayLogSchema);
exports.chatDayLog = chatDayLog;