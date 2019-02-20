import {call, takeLatest, put} from 'redux-saga/effects';
import rootSaga, {fetchCampersByPointTypeSaga} from './sagas';
import {
  FETCH_CAMPERS_BY_POINT_TYPE,
  FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
  FETCH_CAMPERS_BY_POINT_TYPE_FAILED,
} from './constants';
import {fetchCampersByPointType} from './apis';

describe('sagas', () => {
  test('rootSaga', () => {
    const iterator = rootSaga();
    expect(iterator.next().value).toEqual(
      takeLatest(FETCH_CAMPERS_BY_POINT_TYPE, fetchCampersByPointTypeSaga),
    );
  });

  test('fetchCampersByPointTypeSaga succeeded', () => {
    const sortingType = 'recent';
    const mockCampers = [
      {id: 1, username: 'tester1', recent: 99, allTime: 390},
      {id: 2, username: 'tester2', recent: 59, allTime: 790},
    ];
    const iterator = fetchCampersByPointTypeSaga({sortingType});

    expect(iterator.next().value).toEqual(
      call(fetchCampersByPointType, sortingType),
    );

    expect(iterator.next(mockCampers).value).toEqual(
      put({
        type: FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
        sortingType,
        campers: mockCampers,
      }),
    );
  });

  test('fetchCampersByPointTypeSaga failed', () => {
    const error = new Error('something went wrong');
    const sortingType = 'allTime';
    const iterator = fetchCampersByPointTypeSaga({sortingType});
    iterator.next();
    expect(iterator.throw(error).value).toEqual(
      put({type: FETCH_CAMPERS_BY_POINT_TYPE_FAILED, error}),
    );
  });
});
