import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

const TableRow = ({ data }) => (
  <Row>
    <Col xs={3}>{data.name}</Col>
    <Col xs={3}>{data.domain}</Col>
    {/* TODO: make a component for progress bar */}
    <Col xs={2}>{data.load}</Col>
    <Col xs={4}>
      <Row>
        {/* TODO: fix this */}
        <Col xs={2}>{'✅'}</Col>
        <Col xs={2}>✅</Col>
        <Col xs={2}>{data.features.openvpn_tcp ? '✅' : ''}</Col>
        <Col xs={2}>{data.features.openvpn_udp ? '✅' : ''}</Col>
        <Col xs={2}>🎄</Col>
        <Col xs={2}>🍪</Col>
      </Row>
    </Col>
  </Row>
);

TableRow.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default TableRow;
