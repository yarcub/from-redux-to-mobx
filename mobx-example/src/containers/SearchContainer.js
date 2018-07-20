import { observer } from 'mobx-react'
import React from 'react'
import TopicSearch from '../components/Header'

export default observer(props => {
  console.log('render TopicSearch')
  return <TopicSearch onSearch={() => {}}/>
})

