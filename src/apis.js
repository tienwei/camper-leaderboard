import axios from 'axios';

export const fetchCampersByPointType = (type = 'recent') =>
  axios.get(`/api/campers/${type}`).then(res => res.data.campers);
