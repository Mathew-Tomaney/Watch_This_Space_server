const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {

    const router = express.Router();

    //INDEX
    router.get('/', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500);
            res.json({ status: 500, error: err});
        });

    router.get('/:id',)
    })


}