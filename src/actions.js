import {FETCH_CAMPERS_BY_POINT_TYPE} from './constants';

export const getCampersByPointTypeAction = (sortingType = 'recent') => ({
  type: FETCH_CAMPERS_BY_POINT_TYPE,
  sortingType,
});
