import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from './SearchField';
import BooksTable from './BooksTable'
import { setSorting, fetchBooks, changePage } from '../../actions/actions';
import {
  Button,
  Select,
  MenuItem
} from '@material-ui/core';
import { Link } from 'react-router-dom';

class BookListPage extends Component {
  componentDidUpdate(prevProps) {
    const { match, loadBooks, searchQuery, sorting } = this.props;
    if(match.params.page !== prevProps.match.params.page
    || match.params.limit !== prevProps.match.params.limit
    || searchQuery !== prevProps.searchQuery
    || sorting !== prevProps.sorting) {
      loadBooks(match.params.page, match.params.limit, {
        sortBy: sorting.by,
        sortOrder: sorting.order,
        searchQuery
      });
    }
  }

  componentDidMount() {
    const { match, loadBooks } = this.props;
    loadBooks(match.params.page, match.params.limit);
  }

  render() {
    const { match, listLength, isLoading } = this.props;
    const page = +match.params.page;
    const limit = +match.params.limit;

    return (
      <Fragment>
        <SearchField />
        <BooksTable />
        <Button
          component={Link}
          disabled={page === 0}
          to={`/booklist/${page - 1}/${limit}`}
        >Previous page</Button>{page + 1}
        <Button
          component={Link}
          disabled={page * limit + limit >= listLength}
          to={`/booklist/${page + 1}/${limit}`}
        >Next page</Button>
        <Select value='' displayEmpty>
          <MenuItem value='' disabled>Items per page</MenuItem>
          {[5,10,15].map(n => (
            <MenuItem
              component={Link}
              to={`/booklist/0/${n}`}
              key={n}
            >{n}</MenuItem>
          ))
        }
        </Select>
        {isLoading && 'Loading...'}
      </Fragment>
    );
  }
}

BookListPage.propTypes = {
  listLength: PropTypes.number,
  isLoading: PropTypes.bool,
  searchQuery: PropTypes.string,
  sorting: PropTypes.shape({
    by: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }),
  match: PropTypes.shape({
    params: PropTypes.shape({
      page: PropTypes.string,
      limit: PropTypes.string
    })
  })
};

const mapStateToProps = ({bookList: { listLength, searchQuery, sorting }, root: { isLoading } }) => ({
  listLength,
  isLoading,
  searchQuery,
  sorting
});

const mapDispatchToProps = dispatch => ({
  onHeaderClick: sorting => dispatch(setSorting(sorting)),
  loadBooks: (page, limit, params) => dispatch(fetchBooks(page, limit, params)),
  changePage: (page, limit) => dispatch(changePage(page, limit))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookListPage);