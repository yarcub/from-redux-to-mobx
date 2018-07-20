import { connect } from 'react-redux'
import { actions } from '../actions'
import Search from '../components/TopicSearch'

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => ({
  onSearch: (searchTerm) => dispatch(actions.changeSearch(searchTerm))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search)