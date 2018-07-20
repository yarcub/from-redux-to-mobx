import { observer } from 'mobx-react'
import React from 'react'
import store from '../stores/Twitter'
import Header from '../components/Header'

export default observer((props) => {
  console.log('Render header')
  return <Header
    unreadTweetCount={store.unreadCount}
    onShowAll={() => store.showAll()}
  />
})
