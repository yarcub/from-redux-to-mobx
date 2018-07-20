import { types } from '../actions'

const initialState = {
  tweets: [],
  visibleTweets: 10
}

export default (state = initialState, action) => {
  switch(action.type) {
    case types.ADD_TWEET:
      return Object.assign({}, state, {
        tweets:  [action.payload.tweet].concat(state.tweets)
      })
    case types.SHOW_ALL:
      return Object.assign({}, state, {
        visibleTweets: state.tweets.length
      })
    case types.CHANGE_TOPICS_SUCCESS:
    case types.CLEAR_TWEETS:
      return initialState
    default:
      return state
  }
}

/* SELECTORS */
const getUnreadCount =  state => state.tweets.length > state.visibleTweets ? state.tweets.length - state.visibleTweets : 0
const getTweets = state => {
  if (getUnreadCount(state) < 1) {
    return state.tweets
  } else {
    const lastIndex = state.tweets.length
    const startIndex = lastIndex - state.visibleTweets

    return state.tweets.slice(startIndex, lastIndex)
  }
}

export const selectors = {
  getTweets,
  getUnreadCount
}


