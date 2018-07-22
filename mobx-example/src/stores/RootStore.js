import { configure, observable, computed, action } from "mobx";
import TwitterStore from './TwitterStore'
import AppStore from './AppStore'

configure({ enforceActions: "strict" });

class RootStore {
  constructor() {
    this.twitterStore = new TwitterStore()
    this.appStore = new AppStore(this.twitterStore)
  }
}

export default RootStore