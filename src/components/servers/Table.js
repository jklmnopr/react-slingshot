import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import TableRow from './TableRow';

const Table = ({ title, rowData }) => (
  <div>
    {title && <h3 className="space-xs-3">{title}</h3>}
    <Row className="table-header space-xs-1">
      <Col xs={3}>Location</Col>
      <Col xs={2}>Server address</Col>
      <Col xs={2}>Server load</Col>
      <Col xs={5}>
        <Row>
          <Col xs={2}>PPTP</Col>
          <Col xs={2}>L2TP</Col>
          <Col xs={2}>OpenVPN TCP</Col>
          <Col xs={2}>OpenVPN UDP</Col>
          <Col xs={2}>Proxy</Col>
          <Col xs={2}>Socks5</Col>
        </Row>
      </Col>
    </Row>
    {rowData.map((v, i) => <TableRow key={i} {...v} />)}
  </div>
);

Table.propTypes = {
  title: PropTypes.string,
  rowData: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    domain: PropTypes.string.isRequired,
    load: PropTypes.number.isRequired,
    feature: PropTypes.object.isRequired, // eslint-disable-line
  })).isRequired,
};

export default Table;
