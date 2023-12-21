const mongoose = require('mongoose')

const hashTagSchema = new mongoose.Schema({
    title: {
        type: String,
        tweets: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Tweet'
        }]
    }
}, { timestamps: true })

const HashTag = mongoose.model('HashTag', hashTagSchema)
module.exports = HashTag