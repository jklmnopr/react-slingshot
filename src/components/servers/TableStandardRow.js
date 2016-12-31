import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Table from './Table';
import TableButton from './TableButton';

class TableStandardRow extends Component {
  state = {
    isExpanded: false,
  };

  onButtonClick = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { data } = this.props;
    return (
      <div>
        <Row>
          <Col xs={6}>{data.countryName}</Col>
          <Col xs={2}>{data.serverCount}</Col>
          <Col xs={4}>
            <TableButton onClick={this.onButtonClick}>
              Show Servers
            </TableButton>
          </Col>
        </Row>
        {this.state.isExpanded
          ? <Table title data={data.serverList} />
          : ''}
      </div>
    );
  }
}

TableStandardRow.propTypes = {
  data: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default TableStandardRow;
