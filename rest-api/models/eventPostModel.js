const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const eventPostSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    likes: [{
        type: ObjectId,
        ref: "User"
    }],
    disLikes: [{
        type: ObjectId,
        ref: "User"
    }],
    userId: {
        type: ObjectId,
        ref: "User"
    },
    eventId: {
        type: ObjectId,
        ref: "Event"
    },
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('EventPost', eventPostSchema);
