import React from 'react';
import { Navigate } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ element: Element, isAuthenticated }) => {
  return isAuthenticated ? <Element /> : <Navigate to="/login" />;
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.ui.get('isUserLoggedIn'),
});

export default connect(mapStateToProps)(PrivateRoute);