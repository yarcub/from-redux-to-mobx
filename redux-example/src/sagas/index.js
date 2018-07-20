import { types, actions } from '../actions'
import { put, call, takeLatest } from 'redux-saga/effects';

function* changeTopics (action) {
  try {
    yield call(fetch,'http://localhost:8000/topics', {
      method: 'post',
      body: JSON.stringify({
        topics: action.payload.topics
      })
    })
    yield put(actions.changeTopicsSuccess())
  } catch (e) {
    yield put(actions.changeTopicsError())
  }
}


function* rootSaga() {
  yield takeLatest(types.CHANGE_SEARCH_TERM, changeTopics)
}

export default rootSaga;