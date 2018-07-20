import { configure, observable, computed, action } from "mobx";

configure({ enforceActions: "strict" });

class Twitter {
  @observable tweets = []
  @observable visibleTweets = 10

  @computed get unreadCount() {
    console.log('computing unreadCount')
    return this.tweets.length > this.visibleTweets ? this.tweets.length - this.visibleTweets : 0
  }

  @computed get timeline() {
    console.log('computing timeline')
    if (this.unreadCount < 1) {
      return this.tweets
    } else {
      const lastIndex = this.tweets.length
      const startIndex = lastIndex - this.visibleTweets
  
      return this.tweets.slice(startIndex, lastIndex)
    }
  }

  @action.bound addTweet(tweet) {
    console.log('adding a tweet')
    this.tweets.unshift(tweet)
  }

  @action.bound showAll() {
    this.visibleTweets = this.tweets.length
  }

  @action.bound clearTweets() {
    this.tweets = []
    this.visibleTweets = 0
  }
}

export default new Twitter()