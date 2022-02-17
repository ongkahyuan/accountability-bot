const mongoose = require('mongoose');

const groupSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    chatID: {
        type: String,
    },
    reminderTime: {
        minute: {
            type: [Number],
        },
        hour: {
            type: [Number],
        }, // Not done
    },
    reminderDay: {
        daily: {
            type: Boolean,
        },
        days: {
            type: [Number],
        }
    }
});

const group = mongoose.model('group', groupSchema);
module.exports = group;