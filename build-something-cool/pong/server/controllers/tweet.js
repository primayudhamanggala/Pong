const OAuth = require('oauth');
require('dotenv').config()

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  process.env.APP_CONSUMER_KEY,
  process.env.APP_SECRET,
  '1.0A',
  null,
  'HMAC-SHA1'
);


var twitterSearch = function(req, res) {
  oauth.get(
    'https://api.twitter.com/1.1/search/tweets.json?q=%23videogame&result_type=recent',
    process.env.USER_TOKEN,
    process.env.USER_SECRET,
    function (e, data){
      var tweetArr = []
      var tweets = JSON.parse(data)
      tweets.statuses.forEach((tweet)=>{
        tweetArr.push(tweet.text)
      })
      res.send(tweetArr)
    }
  )
}


module.exports = {
  twitterSearch
}
