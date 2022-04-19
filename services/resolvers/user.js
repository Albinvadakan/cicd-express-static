
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const users = [{ "First Name": "Albin", "Last Name": "VP", "email": "albinvp03@gmail.com", "phone": "9874563210" }];

exports.create_user = async (req, res, next) => {
    try {
        users.push({ "First Name": req.body.first_name, "Last Name": req.body.last_name, "email": req.body.email, "phone": req.body.phone })
        res.status(201).json({
            "message": "user created successfully"
        });

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