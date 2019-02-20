import reducers from './reducers';
import {
  FETCH_CAMPERS_BY_POINT_TYPE,
  FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
  FETCH_CAMPERS_BY_POINT_TYPE_FAILED,
} from './constants';

describe('reducers', () => {
  test('return default state when no actions match', () => {
    const invalidAction = {type: 'invalid'};
    expect(reducers({}, invalidAction)).toEqual({});
  });

  test('return a new state with fetching is true and sortingType', () => {
    const mockAction = {
      type: FETCH_CAMPERS_BY_POINT_TYPE,
      sortingType: 'allTime',
    };
    expect(reducers({}, mockAction)).toEqual({
      fetching: true,
      sortingType: 'allTime',
    });
  });

  test('return a new state with fetching is false and campers', () => {
    const mockCampers = [
      {id: 1, username: 'tester1', recent: 99, allTime: 390},
      {id: 2, username: 'tester2', recent: 59, allTime: 790},
    ];
    const mockAction = {
      type: FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
      campers: mockCampers,
    };
    expect(
      reducers({fetching: true, sortingType: 'recent'}, mockAction),
    ).toEqual({
      fetching: false,
      sortingType: 'recent',
      campers: mockCampers,
    });
  });

  test('return a new state with fetching is false and error', () => {
    const mockError = new Error('test error');
    const mockAction = {
      type: FETCH_CAMPERS_BY_POINT_TYPE_FAILED,
      error: mockError,
    };
    expect(reducers({}, mockAction)).toEqual({
      fetching: false,
      error: mockError,
    });
  });
});
