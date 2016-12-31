import React, { PropTypes } from 'react';
import TableRow from './TableRow';
import TableStandardRow from './TableStandardRow';

const Table = ({ title, isStandard = false, data }) => (
  <div>
    {title && <h3>{title}</h3>}
    <hr />
    {data.map((v, i) => (isStandard
      ? <TableStandardRow key={i} data={v} />
      : <TableRow key={i} data={v} />
    ))}
    <hr />
  </div>
);

Table.propTypes = {
  title: PropTypes.string,
  isStandard: PropTypes.bool,
  data: PropTypes.arrayOf(PropTypes.object).isRequired, // eslint-disable-line
};

export default Table;
