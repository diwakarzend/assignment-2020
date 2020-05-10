import { call, put, takeLatest, all, fork } from 'redux-saga/effects'
import * as actions from '../actions/types'
import axios from '../../utils/axios'
//import urls from '../../utils/urls'
import { bookList } from '../actions/bookAction'
import {API_URL} from '../../utils/constants'


function fetchBookList () {
  return axios.request({
    method: 'get',
    url: API_URL+"getAllBooks",
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

export function * fetchBookListActionEffect () {
  try {
    const { data } = yield call(fetchBookList)

    if (data) {
      console.log('Book Data fetched',data)

      yield put(bookList(data))
    } else {
      // reject(data);
    }
  } catch (e) {
    //   alert.error(e.message || 'Authentication Error');
    //   yield put(authError(e));
    console.log('Error found while fetching book')
    // if (reject) reject(e);
  }
}

export function * fetchBookListActionWatcher () {
  yield takeLatest(actions.FETCH_BOOK_LIST, fetchBookListActionEffect)
}

export default function * rootSaga() {
  yield all([
    fork(fetchBookListActionWatcher),

  ])
}
