import { configure, observable, action } from "mobx";

configure({ enforceActions: "strict" });

class TwitterStore {
  @observable tweets = []

  @action.bound addTweet(tweet) {
    console.log('Pushed a tweet!')
    this.tweets.unshift(tweet)
  }

  @action.bound clearTweets() {
    this.tweets = []
  }
}

export default TwitterStore