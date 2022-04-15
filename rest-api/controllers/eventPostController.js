const { userModel, eventModel, eventPostModel } = require('../models');

function newEventPost(text, userId, eventId) {
    return eventPostModel.create({ text, userId, eventId })
        .then(eventPost => {
            return Promise.all([
                userModel.updateOne({ _id: userId }, { $push: { eventPosts: eventPost._id }, $addToSet: { events: eventId } }),
                eventModel.findByIdAndUpdate({ _id: eventId }, { $push: { eventPosts: eventPost._id }, $addToSet: { subscribers: userId } }, { new: true })
            ])
        })
}

function getLatestsEventPosts(req, res, next) {
    const limit = Number(req.query.limit) || 0;

    eventPostModel.find()
        .sort({ created_at: -1 })
        .limit(limit)
        .populate('eventId userId')
        .then(eventPosts => {
            res.status(200).json(eventPosts)
        })
        .catch(next);
}

function createEventPost(req, res, next) {
    const { eventId } = req.params;
    const { _id: userId } = req.user;
    const { eventPostText } = req.body;

    newEventPost(eventPostText, userId, eventId)
        .then(([_, updatedEvent]) => res.status(200).json(updatedEvent))
        .catch(next);
}

function editEventPost(req, res, next) {
    const { eventPostId } = req.params;
    const { eventPostText } = req.body;
    const { _id: userId } = req.user;

    // if the userId is not the same as this one of the post, the post will not be updated
    eventPostModel.findOneAndUpdate({ _id: eventPostId, userId }, { text: eventPostText }, { new: true })
        .then(updatedEventPost => {
            if (updatedEventPost) {
                res.status(200).json(updatedEventPost);
            }
            else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function deleteEventPost(req, res, next) {
    const { eventPostId, eventId } = req.params;
    const { _id: userId } = req.user;

    Promise.all([
        eventPostModel.findOneAndDelete({ _id: eventPostId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { eventPosts: eventPostId } }),
        eventModel.findOneAndUpdate({ _id: eventId }, { $pull: { eventPosts: eventPostId } }),
    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne)
            } else {
                res.status(401).json({ message: `Not allowed!` });
            }
        })
        .catch(next);
}

function like(req, res, next) {
    const { eventPostId } = req.params;
    const { _id: userId } = req.user;

    console.log('like')

    eventPostModel.updateOne({ _id: eventPostId }, { $addToSet: { likes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Liked successful!' }))
        .catch(next)
}

function dislike(req, res, next) {
    const { eventPostId } = req.params;
    const { _id: userId } = req.user;

    console.log('dislike')

    eventPostModel.updateOne({ _id: eventPostId }, { $addToSet: { dislikes: userId } }, { new: true })
        .then(() => res.status(200).json({ message: 'Dislike successful!' }))
        .catch(next)
}

module.exports = {
    getLatestsEventPosts,
    newEventPost,
    createEventPost,
    editEventPost,
    deleteEventPost,
    like,
    dislike
}
