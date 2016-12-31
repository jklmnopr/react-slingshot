import React, { PropTypes } from 'react';
import { Link } from 'react-router';

// This is a class-based component because the current
// version of hot reloading won't hot reload a stateless
// component at the top-level.
// eslint-disable-next-line
class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/fuel-savings">Demo App</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/servers">Servers</Link>
        <br />
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element,
};

export default App;
