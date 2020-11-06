// Dependencies:
const IDEAS_ROUTER = require('express').Router();

// Local dependencies:
const _checkMillionDollarIdea = require('./checkMillionDollarIdea');

// Helpers functions from database:
const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

IDEAS_ROUTER.param('idea', (req, res, next, id) => {
    const idea = getFromDatabaseById('ideas', id);
    if (idea) {
        req.idea = idea;
        next();
    } else { res.status(404).send(); }
});

IDEAS_ROUTER.get("/", (req, res) => {
    res.send(getAllFromDatabase("ideas"));
});

IDEAS_ROUTER.post("/", _checkMillionDollarIdea, (req, res) => {
    res.status(201).send(addToDatabase("ideas", req.body));
});

IDEAS_ROUTER.get("/:idea", (req, res) => {
    res.send(req.idea);
});

IDEAS_ROUTER.put("/:idea", _checkMillionDollarIdea, (req, res) => {
    res.send(updateInstanceInDatabase("ideas", req.body));
});

IDEAS_ROUTER.delete("/:idea", (req, res) => {
    deleteFromDatabasebyId("ideas", req.idea.id) ? res.status(204).send() : res.status(500).send();
});

// Export the module:
module.exports = IDEAS_ROUTER;
