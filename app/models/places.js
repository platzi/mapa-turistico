var mongoose = require('mongoose'),
    Schema   = mongoose.Schema;

var placesSchema = new Schema({
    description : {type: String},
    city        : {type: String, required: true},
    country     : {type: String, required: true},
    name  : {type: String, required: true},
    image  : {type: String, required: true},
    point : {
        lat : {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    url   : {type: String}
});

module.exports = {
    Places      : mongoose.model('places', placesSchema),
    placesSchema: placesSchema
};