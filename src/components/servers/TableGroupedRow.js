import React, { Component, PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Table from './Table';
import TableButton from './TableButton';

class TableGroupedRow extends Component {
  state = {
    isExpanded: false,
  };

  onButtonClick = () => this.setState({ isExpanded: !this.state.isExpanded });

  render() {
    const { countryName, serverCount, serverList } = this.props;
    return (
      <div>
        <Row className="table-row-flex space-xs-1">
          <Col xs={6}>{countryName}</Col>
          <Col xs={2}>{serverCount}</Col>
          <Col xs={4}>
            <TableButton action={this.state.isExpanded} onClick={this.onButtonClick}>
              {this.state.isExpanded
                ? 'Hide Servers'
                : 'Show servers'
              }
            </TableButton>
          </Col>
        </Row>
        {this.state.isExpanded
          ? <Table rowData={serverList} />
          : ''
        }
      </div>
    );
  }
}

TableGroupedRow.propTypes = {
  countryName: PropTypes.string.isRequired,
  serverCount: PropTypes.number.isRequired,
  serverList: PropTypes.array.isRequired, // eslint-disable-line react/forbid-prop-types
};

export default TableGroupedRow;
