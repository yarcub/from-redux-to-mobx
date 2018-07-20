export const types = {
  ADD_TWEET: 'ADD_TWEET',
  SHOW_ALL: 'SHOW_ALL',
  CHANGE_SEARCH_TERM: 'CHANGE_SEARCH_TERM',
  CHANGE_TOPICS_ERROR: 'CHANGE_TOPICS_ERROR',
  CHANGE_TOPICS_SUCCESS: 'CHANGE_TOPICS_SUCCESS',
  CLEAR_TWEETS: 'CLEAR_TWEETS'
}

export const actions = {
  addTweet: (tweet) => ({ 
    type: types.ADD_TWEET,
    payload: {tweet}
  }),
  showAll: () => ({
    type: types.SHOW_ALL
  }),
  changeSearch: (searchTerm) => ({
    type: types.CHANGE_SEARCH_TERM,
    payload: {
      searchTerm,
      topics: searchTerm.trim().split(',')
    }
  }),
  changeTopicsError: () => ({
    type: types.CHANGE_TOPICS_ERROR
  }),
  changeTopicsSuccess: () => ({
    type: types.CHANGE_TOPICS_SUCCESS
  }),
  clearTweets: () => ({ type: types.CLEAR_TWEETS })
}
