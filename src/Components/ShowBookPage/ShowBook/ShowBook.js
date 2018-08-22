import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

const ShowBook = ({ children, bookProperties }) => (
  <Fragment>
    <Table>
      <TableBody>
        {bookProperties.map(property => (
          <TableRow key={property.id}>
            <TableCell>{property.name}</TableCell>
            <TableCell>
              {children[property.id]}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    <Button
      component={Link}
      to={`/showbook/${children.id}/edit`}
    >Edit book</Button>
    <Button
      component={Link}
      to={`/booklist`}
    >Back to book list</Button>
  </Fragment>
);

ShowBook.propTypes = {
  children: PropTypes.object.isRequired,
  bookProperties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string
  })).isRequired
};

export default ShowBook;