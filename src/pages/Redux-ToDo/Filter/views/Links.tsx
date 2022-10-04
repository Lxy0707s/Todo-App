import React from 'react';
import {connect} from 'react-redux';
import {setFilter} from '../actions';
import PropTypes from "prop-types";

const Links = ({active, children, onClick}:any) => {
  if (active) {
    return <b className="filter selected">{children}</b>;
  } else {
    return (
      <a href="/#" className="filter not-selected" onClick={(event) => {
        event.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    );
  }
};

Links.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state:any, ownProps:any) => {
  return {
    active: state.filter === ownProps.filter
  }
};

const mapDispatchToProps = (dispatch:any, ownProps:any) => ({
  onClick: () => {
    dispatch(setFilter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Links);
