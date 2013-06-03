module.exports = function (req, res, next) {
    'use strict';

    if (req.isAuthenticated()) {
        return next();
    }
    return res.send(403);
};