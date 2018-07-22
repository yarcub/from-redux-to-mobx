import { observable, computed, action } from "mobx";

class AppStore {
  @observable maxVisibleTweets = 10

  constructor (twitterStore) {
    this.twitterStore = twitterStore
  }

  @computed get unreadTweets () {
    return this.twitterStore.tweets.length - this.timeline.length
  }

  @computed get timeline () {
    const allTweets = this.twitterStore.tweets
    if (allTweets.length <= this.maxVisibleTweets) {
      return allTweets.slice(0, allTweets.length)
    } else {
      const head = allTweets.length - this.maxVisibleTweets
      const tail = allTweets.length
      return allTweets.slice(head, tail)
    }
  }

  @action.bound showAll() {
    this.maxVisibleTweets = this.twitterStore.tweets.length
  }
}

export default AppStore