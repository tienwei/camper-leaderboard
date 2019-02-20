import React, {Component} from 'react';
import {arrayOf, bool, func, object} from 'prop-types';
import {connect} from 'react-redux';
import {getCampersByPointTypeAction} from '../actions';
import CamperTable from '../components/CamperTable';

export class CamperTableContainer extends Component {
  componentDidMount() {
    this.props.fetchCampersByPointType('recent');
  }

  render() {
    const {fetching, campers} = this.props;
    return fetching ? <p>Loading...</p> : <CamperTable campers={campers} />;
  }
}

const mapStateToProps = state => ({
  fetching: state.fetching,
  campers: state.campers,
});
const mapDispatchToProps = dispatch => ({
  fetchCampersByPointType: type => dispatch(getCampersByPointTypeAction(type)),
});

CamperTableContainer.propTypes = {
  campers: arrayOf(object),
  fetching: bool,
  fetchCampersByPointType: func,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CamperTableContainer);
