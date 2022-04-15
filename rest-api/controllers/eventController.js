const { eventModel } = require('../models');

function getEvents(req, res, next) {
    eventModel.find()
        .populate('userId schoolId')
        .then(events => res.json(events))
        .catch(next);
}

function getEvent(req, res, next) {
    const { eventId } = req.params;

    eventModel.findById(eventId)
        .populate({
            path: 'eventPosts',
            populate: {
                path: 'userId'
            }
        })
        .then(event => res.json(event))
        .catch(next);
}

function createEvent(req, res, next) {
    const { eventName, eventDescription, eventTime, schoolId } = req.body;
    const { _id: userId } = req.user;
    const school = schoolId == "" ? null : schoolId;
    //TODO
    eventModel.create({ eventName, eventDescription, eventTime, schoolId: school, userId, subscribers: [], eventPosts: [] })
        .then(event => res.status(200).json(event))
        .catch (next);
}

function subscribe(req, res, next) {
    const eventId = req.params.eventId;
    const { _id: userId } = req.user;
    eventModel.findByIdAndUpdate({ _id: eventId }, { $addToSet: { subscribers: userId } }, { new: true })
        .then(updatedEvent => {
            res.status(200).json(updatedEvent)
        })
        .catch(next);
}

module.exports = {
    getEvents,
    createEvent,
    getEvent,
    subscribe,
}
