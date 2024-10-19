const express = require("express");

const router = express.Router();

// GET localhost:3000/users
router.get("/", (request, response) => {

    response.json({
        data: [
            "xander",
            "tom",
            "hannah",
            "reece",
            "brad",
            "hayden"
        ]
    });
});

// POST localhost:3000/users/signup
router.post("/signup", async(request, response) => {
    let receiveUserData = request.body;

    receiveUserData.password = "EncryptedPassword";

    // pretend we have written receiveUserData into a DB
    let placeholderDatabaseResult = {...receiveUserData};

    // placeholderDatabaseResult is a placeholder for actually making a new user in a database
    response.json(receiveUserData);
});

module.exports = router;