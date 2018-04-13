/**
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { Switch, Route } from 'react-router-dom';
import { bindActionCreators, compose } from 'redux';


class App extends React.Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {},
    dispatch,
  );
}

const mapStateToProps = createStructuredSelector({});

// Wrap the component to inject dispatch and state into it
const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(App);
