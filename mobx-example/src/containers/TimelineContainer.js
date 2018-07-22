import { inject } from 'mobx-react'
import TweetTimeline from '../components/TweetTimeline'

export default inject(stores => ({
  tweets: stores.appStore.timeline,
  isShowingAll: stores.appStore.unreadTweets === 0
}))(TweetTimeline)
