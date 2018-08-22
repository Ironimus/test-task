import React from 'react';
import PropTypes from 'prop-types';
import {
  TableBody,
  TableCell,
  TableRow,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

const BookTableBody = ({ children, bookProperties }) => (
  <TableBody>
    {children.map(book => (
      <TableRow key={book.id}>
        {bookProperties.map(property => (
          <TableCell key={property.id}>{book[property.id]}</TableCell>
        ))}
        <TableCell>
          <Button
            component={Link}
            to={`/showbook/${book.id}`}
          >Show book</Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
);

BookTableBody.propTypes = {
  children: PropTypes.array.isRequired,
  bookProperties: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string
  })).isRequired
};

export default BookTableBody;