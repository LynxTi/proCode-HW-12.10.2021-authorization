const mongoose = require('mongoose');

const { Schema } = mongoose;

require('./comment');

const productSchema = new Schema ({
    nameProduct: {
        type: Schema.Types.String,
        required: true,
        minlength: 3
    },
    discription: {
        type: Schema.Types.String
    },
    price: {
        type: Schema.Types.Number,
        required: true
    },
    comments: [{
        type: Schema.Types.ObjectId, ref: 'comment'
    }]
});

const model = mongoose.model('pruduct', productSchema);
module.exports = model; 