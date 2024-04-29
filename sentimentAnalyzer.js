```javascript
const { pipeline } = require('@nlpjs/transformers');

async function analyzeTweets(tweets) {
  const sentimentPipeline = await pipeline('sentiment-analysis');

  const results = await Promise.all(tweets.map(async tweet => {
    const sentiment = await sentimentPipeline(tweet.text);
    return sentiment;
  }));

  // Process and aggregate the sentiment results here
  console.log(results);
}

module.exports = {
  analyzeTweets
};
```
