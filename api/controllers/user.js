const User = require("../models/user");

exports.adduser = async (req, res) => {
    
    const {user_id, orgs} = req.body;
    console.log(req.body);

    const user1 = new User({user_id, orgs} );

    user1.save()
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400);
        });
}

exports.updateorg = async (req, res) => {
    const id = req.params.id;
    const orgs = req.body.orgs;

    User.updateOne({ _id: id }, {$set:{orgs}})
        .then(result => {
            res.status(200).send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(400);
        });
}
