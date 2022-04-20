const { schoolModel } = require('../models');

function getSchools(req, res, next) {
    schoolModel.find()
        .populate('teachers students')
        .then(schools => res.json(schools))
        .catch(next);
}

// function getEvent(req, res, next) {
//     const { eventId } = req.params;

//     schoolModel.findById(eventId)
//         .populate({
//             path: 'eventPosts',
//             populate: {
//                 path: 'userId'
//             }
//         })
//         .then(event => res.json(event))
//         .catch(next);
// }

function createSchool(req, res, next) {
    const { schoolName, schoolDistrict, schoolTown } = req.body;
    const { _id: userId } = req.user;

    schoolModel.create({ schoolName, schoolDistrict, schoolTown, userId, teachers: [], students: [] })
        .then(school => res.status(200).json(school))
        .catch(next);
}

// function subscribe(req, res, next) {
//     const eventId = req.params.eventId;
//     const { _id: userId } = req.user;
//     schoolModel.findByIdAndUpdate({ _id: eventId }, { $addToSet: { subscribers: userId } }, { new: true })
//         .populate({
//             path: 'subscribers',
//             populate: {
//                 path: 'userId'
//             }
//         })
//         .then(updatedEvent => {
//             res.status(200).json(updatedEvent)
//         })
//         .catch(next);
// }

// function unsubscribe(req, res, next) {
//     const eventId = req.params.eventId;
//     const { _id: userId } = req.user;
//     schoolModel.findByIdAndUpdate({ _id: eventId }, { $pull: { subscribers: userId } }, { new: true })
//         .populate({
//             path: 'subscribers',
//             populate: {
//                 path: 'userId'
//             }
//         })
//         .then(updatedEvent => {
//             res.status(200).json(updatedEvent)
//         })
//         .catch(next);
// }

module.exports = {
    getSchools,
    createSchool,
    // getEvent,
    // subscribe,
    // unsubscribe
}
