import React , { useState }from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../actions/uiActionCreator';

const Profil = ({user}) => {
  return (
    <>
      <h1>Welcome {user.name}</h1>
      <Link to='/login' onClick={logout}>Log Out</Link>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.ui.get('user'),
  };
};

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps, mapDispatchToProps)(Profil);