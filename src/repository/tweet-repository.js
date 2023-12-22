const Tweet = require('../models/tweets')
class TweetRepository {
   async  create(data) {
    try {
        const tweet = await Tweet.create()
        return tweet;
    }
    catch (err) {
        console.log('error')
    }
}
}
module.exports = TweetRepository