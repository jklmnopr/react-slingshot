import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import TableGroupedRow from './TableGroupedRow';

const TableGrouped = ({ title, rowData }) => (
  <div>
    {title && <h3 className="space-xs-3">{title}</h3>}
    <Row className="table-header">
      <Col xs={6}>Location</Col>
      <Col xs={2}>Server address</Col>
      <Col xs={4}>Show servers</Col>
    </Row>
    {rowData.map((v, i) => <TableGroupedRow key={i} {...v} />)}
  </div>
);

TableGrouped.propTypes = {
  title: PropTypes.string,
  rowData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    feature: PropTypes.object.isRequired, // eslint-disable-line
  })).isRequired,
};

export default TableGrouped;
