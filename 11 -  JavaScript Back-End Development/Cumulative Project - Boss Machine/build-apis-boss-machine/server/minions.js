// Dependencies:
const MINIONS_ROUTER = require('express').Router();

// Helpers functions from database:
const {
    addToDatabase,
    getAllFromDatabase,
    getFromDatabaseById,
    updateInstanceInDatabase,
    deleteFromDatabasebyId,
} = require('./db');

// MINIONS

MINIONS_ROUTER.param('minion', (req, res, next, id) => {
    const minion = getFromDatabaseById('minions', id);
    if (minion) {
        req.minion = minion;
        next();
    } else { res.status(404).send(); }
});

MINIONS_ROUTER.get("/", (req, res) => {
    res.send(getAllFromDatabase("minions"));
});

MINIONS_ROUTER.post("/", (req, res) => {
    res.status(201).send(addToDatabase("minions", req.body));
});

MINIONS_ROUTER.get("/:minion", (req, res) => {
    res.send(req.minion);
});

MINIONS_ROUTER.put("/:minion", (req, res) => {
    res.send(updateInstanceInDatabase("minions", req.body));
});

MINIONS_ROUTER.delete("/:minion", (req, res) => {
    deleteFromDatabasebyId("minions", req.minion.id) ? res.status(204).send() : res.status(500).send();
});


// WORK

MINIONS_ROUTER.param("work", (req, res, next, id) => {
    const work = getFromDatabaseById('work', id);
    if (work) {
        req.work = work;
        next();
    } else { res.status(404).send(); }
})

MINIONS_ROUTER.get("/:minion/work", (req, res) => {
    res.send(getAllFromDatabase("work").filter(work => work.minionId === req.minion.id));
})

MINIONS_ROUTER.post("/:minion/work", (req, res) => {
    const work = req.body;
    work.minionId = req.minion.id;
    res.status(201).send(addToDatabase("work", work));
});

MINIONS_ROUTER.put("/:minion/work/:work", (req, res) => {
    req.minion.id !== req.work.minionId ? res.status(400).send() : res.send(updateInstanceInDatabase("work", req.body));
});

MINIONS_ROUTER.delete("/:minion/work/:work", (req, res) => {
    if (req.minion.id !== req.work.minionId) { res.status(400).send() }
    else { deleteFromDatabasebyId("work", req.work.id) ? res.status(204).send() : res.status(500).send(); }
});

// Export the module:
module.exports = MINIONS_ROUTER;
