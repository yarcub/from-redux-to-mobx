import { connect } from 'react-redux'
import { selectors } from '../reducers'
import Header from '../components/Header'
import { actions } from '../actions'

const mapStateToProps = state => {
  return {
    unreadTweetCount: selectors.getUnreadCount(state)
  }
}

const mapDispatchToProps = dispatch => ({
  onShowAll: () => dispatch(actions.showAll())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header)