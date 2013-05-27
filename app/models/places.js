var mongoose    = require('mongoose'),
    Schema      = mongoose.Schema,
    ObjectId    = Schema.ObjectId,
    placesSchema;

placesSchema = new Schema({
    description : {
        type: String
    },
    city : {
        type    : String,
        required: true
    },
    country     : {
        type    : String,
        required: true
    },
    name : {
        type    : String,
        required: true
    },
    point : {
        lat : {
            type: Number,
            required: true
        },
        lng : {
            type: Number,
            required: true
        }
    },
    image: {
        type: ObjectId,
        ref : 'photo'
    }
});

module.exports = {
    Places      : mongoose.model('places', placesSchema),
    placesSchema: placesSchema
};