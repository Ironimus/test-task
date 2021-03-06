import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import BookTableHead from './BookTableHead';
import BookTableBody from './BookTableBody';
import { Table } from '@material-ui/core';
import { setSorting } from '../../../actions/actions';

const bookProperties = [
  {id: 'id', name: 'Id'},
  {id: 'name', name: 'Name'},
  {id: 'date_of_publication', name: 'Date of publication'}
];

const BooksTable = ({ bookArray, onHeaderClick, sorting }) => (
  <Table>
    <BookTableHead
      onClick={onHeaderClick}
      sorting={sorting}
    >
      {bookProperties}
    </BookTableHead>
    <BookTableBody
      bookProperties={bookProperties}
    >
      {bookArray}
    </BookTableBody>
  </Table>
);

BooksTable.propTypes = {
  bookArray: PropTypes.array.isRequired,
  sorting: PropTypes.shape({
    by: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc'])
  })
};

const mapStateToProps = ({ bookList: { bookArray, sorting } }) => ({
  bookArray,
  sorting
});

const mapDispatchToProps = dispatch => ({
  onHeaderClick: sorting => dispatch(setSorting(sorting))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable)