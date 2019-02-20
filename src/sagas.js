import {takeLatest, call, put} from 'redux-saga/effects';
import {
  FETCH_CAMPERS_BY_POINT_TYPE,
  FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
  FETCH_CAMPERS_BY_POINT_TYPE_FAILED,
} from './constants';
import {fetchCampersByPointType} from './apis';

export default function* rootSaga() {
  yield takeLatest(FETCH_CAMPERS_BY_POINT_TYPE, fetchCampersByPointTypeSaga);
}

export function* fetchCampersByPointTypeSaga({sortingType}) {
  try {
    const campers = yield call(fetchCampersByPointType, sortingType);
    yield put({
      type: FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
      sortingType,
      campers,
    });
  } catch (error) {
    yield put({type: FETCH_CAMPERS_BY_POINT_TYPE_FAILED, error});
  }
}
