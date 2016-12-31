import React, { PropTypes } from 'react';

const HeaderText = ({ servers, countries, pricingLink }) => (
  <div className="container">
    <h1>NordVPN Server Locations</h1>
    <h2>{servers} Servers in {countries} Countries</h2>
    <p className="lead">Welcome to the world’s most advanced VPN:</p>
    <ul>
      <p>1. Select a server type.</p>
      <p>2. Choose a nearby location.</p>
      <p>3. Double-click on a server via our custom app and you’re all set!</p>
    </ul>
    <p>Not a NordVPN subscriber?
      <a href={pricingLink}>Get started here</a>
    </p>
    <hr />
  </div>
);

HeaderText.propTypes = {
  servers: PropTypes.number.isRequired,
  countries: PropTypes.number.isRequired,
  pricingLink: PropTypes.string.isRequired,
};

export default HeaderText;
