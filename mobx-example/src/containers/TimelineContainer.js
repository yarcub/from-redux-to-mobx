import { observer } from 'mobx-react'
import { toJS } from 'mobx'
import React from 'react'
import TweetTimeline from '../components/Header'
import store from '../stores/Twitter'


export default observer(props => {
  console.log('render Timeline')
  return <TweetTimeline
    tweets={toJS(store.tweets)}
    isShowingAll={store.unreadCount < 1}
  />
})
