import { inject } from 'mobx-react'
import TopicSearch from '../components/TopicSearch'

export default inject(stores => ({
  onSearch: () => {}
}))(TopicSearch)