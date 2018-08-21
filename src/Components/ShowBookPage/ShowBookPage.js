import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { fetchBook } from '../../actions/actions';
import ShowBook from './ShowBook';
import EditBook from './EditBook';

const bookProperties = [
  {name: 'Name', id: 'name'},
  {name: 'Author', id: 'author'},
  {name: 'Number of pages', id: 'number_of_pages'},
  {name: 'Date of publication', id: 'date_of_publication'},
];

class ShowBookPage extends Component {
  componentDidMount() {
    const { match, loadBook } = this.props;
    loadBook(match.params.id);
  }

  render() {
    const { book } = this.props;
    return (
      <Switch>
        <Route 
          exact
          path={`/showbook/${book.id}`}
          render={() => <ShowBook bookProperties={bookProperties}>{book}</ShowBook>}
        />
        <Route 
          path={`/showbook/${book.id}/edit`}
          render={() => <EditBook bookProperties={bookProperties}>{book}</EditBook>}
        />
      </Switch>
    )
  }
}

const mapStateToProps = ({ book }) => ({
  book
});

const mapDispatchToProps = dispatch => ({
  loadBook: id => dispatch(fetchBook(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(ShowBookPage);