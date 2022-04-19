
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [{ "First Name": "Albin", "Last Name": "VP", "email": "albinvp03@gmail.com", "phone": "9874563210" }];

exports.create_user = async (req, res, next) => {
    try {

        // const hashedPassword = await bcrypt.hash(req.body.password, 12);
        // USERS.create({ name: req.body.name, email: req.body.email, password: hashedPassword })
        //     .then(response => {
        //         res.status(201).json({
        //             userId: response.dataValues.id,
        //             message: "User created"
        //         });
        //     }).catch(function (err) {
        //         console.log(err);
        //     })


    } catch (err) {
        console.log(err.status)
        res.status(400).json({
            message: err.message
        });
    }
};

exports.list_users = async (req, res, next) => {
    try {
        res.status(200).json(users);
    } catch (err) {
        console.log(err.status)
        res.status(400).json({
            message: err.message
        });
    }
};