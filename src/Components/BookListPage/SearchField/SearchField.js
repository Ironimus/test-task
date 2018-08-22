import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { TextField } from '@material-ui/core';
import { setSearchQuery } from '../../../actions/actions';
import debounce from 'debounce';

const SearchField = ({ onChange }) => (
  <TextField
    placeholder='Search'
    onChange={onChange}
    type='search'
  />
);

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => ({
  onChange: event => 
    debounce(v => dispatch(setSearchQuery(v)), 1000)(event.target.value)
});

export default connect(null, mapDispatchToProps)(SearchField);