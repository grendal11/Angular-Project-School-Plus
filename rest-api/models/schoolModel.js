const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const schoolSchema = new mongoose.Schema({
    schoolName: {
        type: String,
        required: true
    },
    schoolDistrict: {
        type: String,
        required: true
    },
    schoolTown: {
        type: String,
        required: true
    },
    teachers: [{
        type: ObjectId,
        ref: "User"
    }],
    students: [{
        type: ObjectId,
        ref: "User"
    }],
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('School', schoolSchema);
