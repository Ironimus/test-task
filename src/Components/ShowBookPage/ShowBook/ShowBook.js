import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableRow,
  TableCell
} from '@material-ui/core';

export default ({ children }) => (
  <Fragment>
    <Table>
      <TableBody>
        {Object.keys(children).map(key => (
          <TableRow key={key}>
            <TableCell>{key}</TableCell>
            <TableCell>
              {children[key]}
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