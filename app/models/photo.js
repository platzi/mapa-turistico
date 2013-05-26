var mongoose = require('mongoose'),
    Schema   = mongoose.Schema,
    ObjectId = Schema.ObjectId,
    // path     = require('path'),
    photoSchema;



// upload_photo = function (file_path, next) {
//     var upload_path = path.join(__dirname, '../../uploads');
// };

photoSchema = new Schema({
    user: {
        type    : ObjectId,
        required: true
    },
    name: {
        type    : String,
        required: true
    },
    url: {
        type: String
    }
});

module.exports = {
    photoSchema: photoSchema,
    Photo      : mongoose.model('Photo', photoSchema)
};