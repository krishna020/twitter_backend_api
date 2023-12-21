const mongoose = require('mongoose')
const tweetSchema = new mongoose.Schema({

    content: {
        type: String,
        max: [250, 'tweet can not be more than 250 character']
    },
    userEmail: {
        type: String
    },
    hashTags: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'HashTag'
    }]
}, { timestamps: true })


/*
tweetSchema.virtual('contentWithEmail').get(function process() {
    return (`${this.content} \ncreatedby ${this.userEmail}`)
})

tweetSchema.pre('save',function(next)
{
    this.content=this.content
    next();
})
*/



const Tweet = mongoose.model('Tweet', tweetSchema)
module.exports = Tweet