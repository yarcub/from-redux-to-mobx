import React from 'react';
import {List, Avatar} from 'antd'

export default ({tweet}) => (
  <List.Item.Meta
    avatar={<Avatar src={tweet.user.avatar}/>}
    title={tweet.user.name}
    description={tweet.text}
  />
)
