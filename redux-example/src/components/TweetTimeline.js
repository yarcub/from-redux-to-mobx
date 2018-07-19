import React from 'react';
import {List} from 'antd'
import TweetPreview from './TweetPreview'

export default ({tweets}) => (
  <List>
    {tweets.reverse().map(tweet => {
      return <TweetPreview key={tweet.id} tweet={tweet}/>
    })}
</List>
)
