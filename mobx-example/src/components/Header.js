import React from 'react';
import { Badge } from 'antd'

const ShowAll = ({count}) => (
  <div>
    <span>Click me to show more!</span>
    <Badge count={count} 
    style={{ 
      backgroundColor: 'red',
      color: 'white',
      boxShadow: '0 0 0 1px #d9d9d9'
    }} />
  </div>    
)

export default ({unreadTweetCount, onShowAll}) => {
  if (unreadTweetCount > 0) {
    return <div className="top-header" onClick={onShowAll}>
      <ShowAll count={unreadTweetCount} />
    </div>
  }
  
  return null
} 
