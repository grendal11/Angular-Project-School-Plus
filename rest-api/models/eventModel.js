const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const eventSchema = new mongoose.Schema({
    eventName: {
        type: String,
        required: true
    },
    eventDescription: {
        type: String,
        required: true
    },
    eventTime: {
        type: Date,
        required: true
    },
    subscribers: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    schoolId: {
        type: ObjectId,
        ref: "School"
    },
    eventPosts: [{
        type: ObjectId,
        ref: "EventPost"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Event', eventSchema);
