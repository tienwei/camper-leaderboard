import axios from 'axios';
import {fetchCampersByPointType} from './apis';

// Mock axios get method
jest.mock('axios', () => ({
  get: jest.fn(async () => await 'test promise function'),
}));

describe('apis', () => {
  const apiBasePath = '/api/campers';

  test('retrieve campers by past 30 day points api', () => {
    fetchCampersByPointType('recent');
    expect(axios.get).toBeCalledWith(`${apiBasePath}/recent`);
  });

  test('retrieve campers by all time points api', () => {
    fetchCampersByPointType('allTime');
    expect(axios.get).toBeCalledWith(`${apiBasePath}/allTime`);
  });
});
