

const express = require("express");
const router = express.Router();

const Userresolver = require('../resolvers/user');

// routing to resolver function based on the context path

router.post("/create", Userresolver.create_user);
router.get("/getallusers", Userresolver.list_users);

module.exports = router;

