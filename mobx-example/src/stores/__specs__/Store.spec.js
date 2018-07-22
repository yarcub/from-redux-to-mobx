import Store from '../RootStore'
import { when } from 'mobx'

describe('Store Spec', () => {

  it('should update app timeline when tweet is added', () => {
    const store = new Store()
    store.twitterStore.addTweet({
      id: '1',
      text: 'tweet 1',
      user: {
        name: 'asdasd',
        avatar: ''
      }
    })

    expect(store.appStore.timeline.length).toBe(1)
  })

  describe('when tweets are 10 more than the max visible ones', () => {
    const store = new Store()
    pushXTweets(store, 20)
    
    it('should have 10 unread tweets', () => {
      expect(store.appStore.unreadTweets).toBe(10)
    })

    it('should not push to app timeline if already showing max tweets', () => {
      const store = new Store()
      pushXTweets(store, 20)
      expect(store.appStore.timeline.length).toBe(10)
    })

    describe('on Show All', () => {
      const store = new Store()
      pushXTweets(store, 20)
      store.appStore.showAll()

      it('should not have unread tweets', () => {
        expect(store.appStore.unreadTweets).toBe(0)
      })

      it('should have all tweets on timeline', () => {
        expect(store.appStore.timeline.length).toBe(20)
      })
    })
  })  
})

function pushXTweets(store, number) {
  const appStore = store.appStore
  for(let i = 0; i < number; i++) {
    store.twitterStore.addTweet({
      id: i,
      text: `tweet ${i}`,
      user: {
        name: 'asdasd',
        avatar: ''
      }
    })
  }
}