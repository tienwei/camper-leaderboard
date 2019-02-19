import React from 'react';
import {number, shape, string} from 'prop-types';

const CamperTableItem = ({camper, rank}) => (
  <tr>
    <td>{rank}</td>
    <td>{camper.username}</td>
    <td>{camper.recent}</td>
    <td>{camper.allTime}</td>
  </tr>
);

CamperTableItem.propTypes = {
  camper: shape({username: string, recent: number, allTime: number}),
  rank: number,
};

export default CamperTableItem;
