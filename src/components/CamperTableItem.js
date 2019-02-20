import React from 'react';
import {number, shape, string} from 'prop-types';

const CamperTableItem = ({camper, rank}) => (
  <tr>
    <td>{rank}</td>
    <td>{camper.username}</td>
    <td>
      <img src={camper.image} alt={camper.username} />
    </td>
    <td>{camper.recent}</td>
    <td>{camper.allTime}</td>
  </tr>
);

CamperTableItem.propTypes = {
  camper: shape({
    id: number,
    username: string,
    image: string,
    recent: number,
    allTime: number,
  }),
  rank: number,
};

export default CamperTableItem;
