import { configure, observable, action, flow } from "mobx";

configure({ enforceActions: "strict" });

class TwitterStore {
  @observable topics = []
  @observable tweets = []

  @action.bound addTweet(tweet) {
    console.log('Pushed a tweet!')
    this.tweets.unshift(tweet)
  }

  changeTopics = flow(function* (topics) {
    try {
      yield fetch('http://localhost:8000/topics', {
        method: 'post',
        body: JSON.stringify({
          topics: topics
        })
      })
      this.topics.length = 0
      this.tweets.length = 0
      this.topics.push.apply(this.topics, topics)
      console.log(`changed topics: ${JSON.stringify(topics)}`)
    } catch (e) {
      console.log('something went wrong chaging topics. Not changing state')
      console.error(e)
    }
  })

}

export default TwitterStore