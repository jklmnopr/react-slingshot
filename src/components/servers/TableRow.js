import React, { PropTypes } from 'react';
import { Row, Col, ProgressBar } from 'react-bootstrap';

const TableRow = ({ name, domain, load, feature }) => (
  <Row className="table-row space-xs-1">
    <Col xs={3}>{name}</Col>
    <Col xs={2}>{domain}</Col>
    <Col xs={2}>
      <ProgressBar now={load} label={`${load}%`} />
    </Col>
    <Col xs={5}>
      <Row>
        {Object.keys(feature).map(v => (
          <Col key={v} xs={2}>
            {feature[v]
              ? <span className="icon-server-feature-tick icon-server_status_tick" />
              : ''
            }
          </Col>
        ))}
      </Row>
    </Col>
  </Row>
);

TableRow.propTypes = {
  name: PropTypes.string.isRequired,
  domain: PropTypes.string.isRequired,
  load: PropTypes.number.isRequired,
  feature: PropTypes.object.isRequired, // eslint-disable-line
};

export default TableRow;
