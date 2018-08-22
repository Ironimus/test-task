import React from 'react';
import PropTypes from'prop-types';
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel
} from '@material-ui/core';

const BookTableHead = ({ children, sorting, onClick}) => (
  <TableHead>
    <TableRow>
      {children.map(property => (
        <TableCell key={property.id}>
          <TableSortLabel
            active={sorting.by === property.id}
            direction={sorting.order}
            onClick={() => onClick({
              by: property.id,
              order: sorting.order === 'asc' && property.id === sorting.by
                ? 'desc'
                : 'asc'
            })}
          >
            {property.name}
          </TableSortLabel>
        </TableCell>
      ))}
      <TableCell>Link to book</TableCell>
    </TableRow>
  </TableHead>
);

BookTableHead.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    id: PropTypes.string
  })).isRequired,
  sorting: PropTypes.shape({
    by: PropTypes.string,
    order: PropTypes.oneOf(['asc', 'desc']),
  }),
  onClick: PropTypes.func
};

export default BookTableHead;