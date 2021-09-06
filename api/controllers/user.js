  
const User = require("../models/user");

exports.addorg = async (req, res) => {
    const id = req.params.id;
    const orgs = req.body.orgs;

    User.updateOne({ _id: id }, {$set:{orgs}})
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}

exports.removeorg = async (req, res) => {
    const id = req.params.id;
    const orgs = req.body.orgs;

    User.updateOne({ _id: id }, {$set:{orgs}})
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
        });
}