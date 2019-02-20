import React from 'react';
import {func, string} from 'prop-types';
import {connect} from 'react-redux';
import {SortingSwitch} from '../components';
import {getCampersByPointTypeAction} from '../actions';

const SortingSwitchContainer = props => {
  const handleOnClick = e => {
    const {sortingType, fetchCampersByPointType} = props;
    // only retrieve when the sorting type changes
    if (e.target.value !== sortingType) fetchCampersByPointType(e.target.value);
  };

  return <SortingSwitch handleOnClick={handleOnClick} />;
};

const mapStateToProps = state => ({sortingType: state.sortingType});
const mapDispatchToProps = dispatch => ({
  fetchCampersByPointType: type => dispatch(getCampersByPointTypeAction(type)),
});

SortingSwitchContainer.propTypes = {
  sortingType: string,
  fetchCampersByPointType: func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortingSwitchContainer);
