import React, { PropTypes } from 'react';

const TableButton = ({ onClick, children }) => (
  <button
    className="btn btn-brand btn-interactive btn-primary"
    onClick={onClick}
  >
    {children}
  </button>
);

TableButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableButton;
