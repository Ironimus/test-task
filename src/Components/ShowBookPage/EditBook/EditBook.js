import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TextField
} from '@material-ui/core';
import { changeBook } from '../../../actions/actions';

class EditBook extends Component {
  constructor(props) {
    super(props);
    this.state = {...props.children};
  }

  handleChange = field => event =>
    this.setState({[field]: event.target.value})

  render() {
    const { children, onSave, bookProperties } = this.props;
    return (
      <Fragment>
        <Table>
          <TableBody>
            {bookProperties.map(field => (
              <TableRow key={field.id}>
                <TableCell>{field.name}</TableCell>
                <TableCell>
                  <TextField
                    value={this.state[field.id]}
                    onChange={this.handleChange(field.id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Button
          disabled={!Object.keys(this.state)
            .some(key => this.state[key] !== children[key])} // shallow object comparison
          onClick={() => onSave(children.id, this.state)}
        >Save</Button>
        <Button
          component={Link}
          to={`/showBook/${children.id}`}
        >Cancel</Button>
        <Button
          component={Link}
          to={`/booklist`}
        >Back to book list</Button>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onSave: (id, book) => dispatch(changeBook(id, book))
});

export default connect(null, mapDispatchToProps)(EditBook)