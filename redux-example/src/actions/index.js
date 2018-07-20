export const types = {
  ADD_TWEET: 'ADD_TWEET',
  SHOW_ALL: 'SHOW_ALL',
  CHANGE_SEARCH_TERM: 'CHANGE_SEARCH_TERM'
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
  })
}
