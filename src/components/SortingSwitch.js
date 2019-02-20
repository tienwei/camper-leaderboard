import React from 'react';
import {func} from 'prop-types';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './sortingSwitch.css';

const SortingSwitch = ({handleOnClick}) => (
  <Form className="sortingRadios">
    <Row>
      <label>
        <strong>Sort By</strong>
      </label>
      <input
        type="radio"
        name="sortingType"
        value="recent"
        defaultChecked
        onClick={handleOnClick}
      />{' '}
      Past 30 Day Points
      <input
        type="radio"
        name="sortingType"
        value="allTime"
        onClick={handleOnClick}
      />{' '}
      All Time Points
    </Row>
  </Form>
);

SortingSwitch.propTypes = {
  handleOnClick: func,
};

export default SortingSwitch;
