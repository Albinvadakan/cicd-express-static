const jwt = require('jsonwebtoken');
/*
* Basic autentication check with JWT token
* Checking the token is existing in the request 
* if yes adding the user details to the request
*/
module.exports = (req, res, next) => {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
        req.isAuth = false;
        return next();
    }
    let decodedToken;
    try {
        decodedToken = jwt.verify(authHeader, 'albin_sc_key');
        console.log(decodedToken);
    } catch (err) {
        req.isAuth = false;
        return next();
    }
    if (!decodedToken) {
        req.isAuth = false;
        return next();
    }
    req.isAuth = true;
    req.useremail = decodedToken.email;
    next();
};