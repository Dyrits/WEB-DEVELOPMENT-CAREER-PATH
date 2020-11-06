// Dependencies:
const MEETINGS_ROUTER = require('express').Router();

// Helpers functions from database:
const {
    addToDatabase,
    getAllFromDatabase,
    deleteAllFromDatabase,
    createMeeting
} = require('./db');


MEETINGS_ROUTER.get("/", (req, res, next) => {
    res.send(getAllFromDatabase("meetings"));
});

MEETINGS_ROUTER.post("/", (req, res, next) => {
    res.status(201).send(addToDatabase("meetings", createMeeting()));
});

MEETINGS_ROUTER.delete("/", (req, res, next) => {
    res.status(204).send(deleteAllFromDatabase("meetings"));
});

// Export the module:
module.exports = MEETINGS_ROUTER;