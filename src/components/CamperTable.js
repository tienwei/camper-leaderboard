import React from 'react';
import Table from 'react-bootstrap/Table';
import {arrayOf, object} from 'prop-types';
import CamperTableItem from './CamperTableItem';

const CamperTable = ({campers}) => {
  return (
    <Table striped bordered hover responsive size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Username</th>
          <th>Avatar</th>
          <th>Past 30Day Points</th>
          <th>All Time Points</th>
        </tr>
      </thead>
      <tbody>
        {campers.map((camper, index) => (
          <CamperTableItem camper={camper} rank={index + 1} key={index} />
        ))}
      </tbody>
    </Table>
  );
};

CamperTable.propTypes = {
  campers: arrayOf(object),
};

export default CamperTable;
