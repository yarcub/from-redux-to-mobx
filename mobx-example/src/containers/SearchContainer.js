import { inject } from 'mobx-react'
import TopicSearch from '../components/TopicSearch'

export default inject(stores => ({
  onSearch: (search) => {
    const topics = search.split(',')
    stores.twitterStore.changeTopics(topics)
  }
}))(TopicSearch)