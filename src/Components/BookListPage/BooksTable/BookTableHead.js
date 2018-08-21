import React from 'react';
import {
  TableHead,
  TableCell,
  TableRow,
  TableSortLabel
} from '@material-ui/core';

export default ({ children, sorting, onClick}) => (
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