// export default 生成器函数
import { FETCH_LUNBO_MULTIDASTAT } from './constants.js'
import { takeEvery } from 'redux-saga/effects';

function * mySaga() {
  yield takeEvery(FETCH_LUNBO_MULTIDASTAT)
}
export default mySaga;