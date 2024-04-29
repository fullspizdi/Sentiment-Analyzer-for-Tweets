```javascript
const { Client } = require('twitter-api-sdk');

// Your Twitter API credentials
const client = new Client(process.env.TWITTER_BEARER_TOKEN);

async function retrieveTweets(searchTerm) {
  const tweets = await client.v2.search(searchTerm);
  return tweets.data;
}

module.exports = {
  retrieveTweets
};
```
