import React from 'react';
import {
  TableBody,
  TableCell,
  TableRow,
  Button
} from '@material-ui/core';
import { Link } from 'react-router-dom';

export default ({ children, bookProperties }) => (
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