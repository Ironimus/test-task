import React from 'react';
import { connect } from 'react-redux';
import BookTableHead from './BookTableHead';
import BookTableBody from './BookTableBody';
import { Table } from '@material-ui/core';
import { setSorting, fetchBooks, changePage } from '../../../actions/actions';

const bookProperties = [
  {id: 'id', name: 'Id'},
  {id: 'name', name: 'Name'},
  {id: 'date_of_publication', name: 'Date of publication'}
];

const BooksTable = ({ bookArray, onHeaderClick, sorting, searchQuery }) => (
  <Table>
    <BookTableHead
      onClick={onHeaderClick}
      sorting={sorting}
    >
      {bookProperties}
    </BookTableHead>
    <BookTableBody
      searchQuery={searchQuery}
      sorting={sorting}
      bookProperties={bookProperties}
    >
      {bookArray}
    </BookTableBody>
  </Table>
);

const mapStateToProps = ({ bookList: { bookArray, sorting, searchQuery } }) => ({
  bookArray,
  sorting,
  searchQuery
});

const mapDispatchToProps = dispatch => ({
  onHeaderClick: sorting => dispatch(setSorting(sorting)),
  loadBooks: (page, limit) => dispatch(fetchBooks(page, limit)),
  changePage: (page, limit) => dispatch(changePage(page, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksTable)