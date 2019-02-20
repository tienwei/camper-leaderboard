import {
  FETCH_CAMPERS_BY_POINT_TYPE,
  FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED,
  FETCH_CAMPERS_BY_POINT_TYPE_FAILED,
} from './constants';

export default (preState = {}, action) => {
  switch (action.type) {
    case FETCH_CAMPERS_BY_POINT_TYPE:
      return {...preState, fetching: true, sortingType: action.sortingType};
    case FETCH_CAMPERS_BY_POINT_TYPE_SUCCEEDED:
      return {...preState, fetching: false, campers: action.campers};
    case FETCH_CAMPERS_BY_POINT_TYPE_FAILED:
      return {...preState, fetching: false, error: action.error};
    default:
      return preState;
  }
};
