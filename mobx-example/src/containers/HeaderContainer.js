import { inject } from 'mobx-react'
import Header from '../components/Header'

export default inject(stores => ({
  unreadTweetCount: stores.appStore.unreadTweets,
  onShowAll: () => stores.appStore.showAll()
}))(Header)