'use strict';

exports.getProfile = function (req, res) {
    if (!req.user) { return res.send({}); }
    return res.send(req.user);
};