import React, { PropTypes } from 'react';

const TableButton = ({ action, onClick, children }) => (
  <button
    className={`btn btn-brand btn-interactive btn-sm ${action ? 'btn-action' : 'btn-primary'}`}
    onClick={onClick}
  >
    {children}
  </button>
);

TableButton.propTypes = {
  action: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default TableButton;
