const mongoose = require('mongoose');

const { Schema } = mongoose;

require('./user');

const commentSchema = new Schema ({
    content: {
        type: Schema.Types.String,
        minlength: 1
    },
    nameAuthor: {
        type: Schema.Types.ObjectId, ref: 'user'
    }
});

const model = mongoose.model('comment', commentSchema);
module.exports = model;