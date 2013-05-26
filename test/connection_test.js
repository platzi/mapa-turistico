var mongoose = require('mongoose');
var conn = mongoose.connect('mongodb://127.0.0.1:27017/map-test');
conn.connection.db.dropDatabase();