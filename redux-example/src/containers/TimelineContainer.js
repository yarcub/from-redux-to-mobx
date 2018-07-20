import { connect } from 'react-redux'
import { selectors } from '../reducers'
import Timeline from '../components/TweetTimeline'

const mapStateToProps = state => {
  return {
    tweets: selectors.getTweets(state),
    isShowingAll: selectors.getUnreadCount(state) < 1
  }
}

const mapDispatchToProps = dispatch => ({})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timeline)