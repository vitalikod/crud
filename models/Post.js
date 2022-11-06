const mongoose = require('mongoose');
const { Schema } = mongoose;

const generalSchema = new Schema({
    title: { 
        type: Schema.Types.String,
        minLength: 2,
        required: true,
        unique: true,
    },
    text: {
        type: Schema.Types.String,
        required: true,
        minLength: 2,
    },
    viewCount: {
        type: Schema.Types.Number,
        default: 0,
    },
    image: Schema.Types.String,
    },
    {
    timestamps: true,
},
);

  const model = mongoose.model('Post', generalSchema)

  module.exports = model;