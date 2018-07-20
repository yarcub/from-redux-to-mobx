import React from 'react';
import {List} from 'antd'
import TweetPreview from './TweetPreview'

export default ({tweets, isShowingAll}) => {
  const overrides = {
    marginTop: isShowingAll ? '0px' : '30px'
  }
  return <List style={overrides} loading={tweets.length < 1}>
    {tweets.map(tweet => {
      return <TweetPreview key={tweet.id} tweet={tweet}/>
    })}
  </List>
}
