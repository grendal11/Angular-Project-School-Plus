const { schoolModel, userModel } = require('../models');

// function getSchools(req, res, next) {
//     schoolModel.find()
//         .populate('teachers students')
//         .then(schools => res.json(schools))
//         .catch(next);
// }

function getSchools(req, res, next) {
    const name = req.query.name || '';

    schoolModel.find({ schoolName: { $regex: name, $options: 'i' } })
        .populate('teachers students')
        .then(schools => res.json(schools))
        .catch(next);
}

function getSchool(req, res, next) {
    const { schoolId } = req.params;

    schoolModel.findById(schoolId)
        .populate('teachers students')
        .then(school => res.json(school))
        .catch(next);
}

function createSchool(req, res, next) {
    const { schoolName, schoolDistrict, schoolTown } = req.body;
    const { _id: userId } = req.user;

    schoolModel.create({ schoolName, schoolDistrict, schoolTown, userId, teachers: [], students: [] })
        .then(school => res.status(200).json(school))
        .catch(next);
}

function addTeacher(req, res, next) {
    const schoolId = req.params.schoolId;
    const { _id: userId } = req.user;
    schoolModel.findByIdAndUpdate({ _id: schoolId }, { $addToSet: { teachers: userId } }, { new: true })
        .populate({
            path: 'teachers',
            populate: {
                path: 'userId'
            }
        })
        .then(updatedSchool => {
            userModel.findByIdAndUpdate({ _id: userId }, { schoolId: updatedSchool._id, role: "teacher" }, { runValidators: true, new: true })
            .then(() => { res.status(200).json(updatedSchool)})           
        })
        .catch(next);
}

// function removeTeacher(req, res, next) {
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
    getSchool,
    addTeacher,
    // unsubscribe
}
