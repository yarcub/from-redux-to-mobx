export const types = {
  ADD_TWEET: 'ADD_TWEET',
  SHOW_ALL: 'SHOW_ALL'
}

export const actions = {
  addTweet: (tweet) => ({ 
    type: types.ADD_TWEET,
    payload: {tweet}
  }),
  showAll: () => ({
    type: types.SHOW_ALL
  })
}
