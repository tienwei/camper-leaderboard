import {getCampersByPointTypeAction} from './actions';
import {FETCH_CAMPERS_BY_POINT_TYPE} from './constants';

describe('actions', () => {
  test('getCampersByPointTypeAction', () => {
    expect(getCampersByPointTypeAction('recent')).toEqual({
      type: FETCH_CAMPERS_BY_POINT_TYPE,
      sortingType: 'recent',
    });
    expect(getCampersByPointTypeAction('allTime')).toEqual({
      type: FETCH_CAMPERS_BY_POINT_TYPE,
      sortingType: 'allTime',
    });
  });
});
