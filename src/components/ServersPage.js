import React, { Component } from 'react';
import HeaderText from './servers/HeaderText';
import Table from './servers/Table';

class ServersPage extends Component {
  state = {
    json: [],
    doubleVPN: [],
    torOverVPN: [],
    ultraFastTV: [],
    antiDDoS: [],
    dedicatedIPServers: [],
    standard: [],
    p2p: [],
  };

  componentDidMount() {
    fetch('https://nordvpn.com/api/server')
      .then(res => res.json())
      .then(json => this.setState({
        json,
        doubleVPN: this.parseJson(json, 'Double VPN'),
        torOverVPN: this.parseJson(json, 'Tor over VPN'),
        ultraFastTV: this.parseJson(json, 'Ultra fast TV'),
        antiDDoS: this.parseJson(json, 'Anti DDoS'),
        dedicatedIPServers: this.parseJson(json, 'Dedicated IP servers'),
        standard: this.parseStandardServers(json, 'Standard VPN servers'),
        p2p: this.parseStandardServers(json, 'P2P'),
      }));
  }

  getCountryList = json => json
    .map(v => v.country)
    .filter((v, i, a) => i === a.lastIndexOf(v))
    .filter(v => v && v !== ' ');

  parseJson = (json, category) => {
    const categories = json.map(v => ({
      ...v,
      categories: v.categories.map(w => w.name),
    }));
    return categories.filter(v => v.categories.includes(category));
  };

  parseStandardServers = (json, category) => {
    const parsed = this.parseJson(json, category);
    return this
      .getCountryList(json)
      .sort()
      .map(v => parsed.filter(w => w.country === v))
      .map(v => ({
        serverCount: v.length,
        serverList: v,
        countryName: v[0] && v[0].country,
      }));
  };

  render() {
    return (
      <div>
        <HeaderText
          servers={this.state.json.length} countries={this.getCountryList(this.state.json).length}
          pricingLink="/pricing/"
        />
        <Table title="Double VPN" data={this.state.doubleVPN} />
        <Table title="Tor over VPN" data={this.state.torOverVPN} />
        <Table title="Ultra fast TV" data={this.state.ultraFastTV} />
        <Table title="Anti DDoS" data={this.state.antiDDoS} />
        <Table title="Dedicated IP servers" data={this.state.dedicatedIPServers} />
        <Table title="Standard VPN servers" data={this.state.standard} isStandard />
        <Table title="P2P" data={this.state.p2p} isStandard />
      </div>
    );
  }
}

export default ServersPage;
