import React, { Component } from 'react';
import HeaderText from '../components/servers/HeaderText';
import Table from '../components/servers/Table';
import TableGrouped from '../components/servers/TableGrouped';

class ServersPage extends Component {
  state = {
    ready: false,
    serverList: {},
  };

  componentDidMount() {
    fetch('https://api.nordvpn.com/server/flist')
      .then(res => res.json())
      .then(serverList => this.setState({ ready: true, serverList }));
  }

  getCount = (servers, prop) => Object.keys(servers)
    .reduce((r, key) => [...r, ...servers[key].servers.map(v => v[prop])], [])
    .filter((v, i, a) => i === a.indexOf(v))
    .length;

  getCountryList = servers => Object.keys(servers)
    .map(key => servers[key].country)
    .filter((v, i, a) => i === a.indexOf(v))
    .filter(v => v && v !== ' ')

  group = servers => this
    .getCountryList(servers)
    .sort()
    .map(v => servers.filter(w => w.country === v))
    .map(v => ({
      serverCount: v.length,
      serverList: v,
      countryName: v[0] && v[0].country,
    }));

  shouldGroup = (name) => {
    const grouped = ['Standard VPN servers', 'P2P'];
    return grouped.includes(name);
  };

  render() {
    const { ready, serverList } = this.state;
    return ready
      ? (<div>
        <HeaderText
          servers={this.getCount(serverList, 'name')}
          countries={this.getCount(serverList, 'country')}
          pricingLink="/pricing/"
        />
        {Object.keys(serverList).map(key => (this.shouldGroup(serverList[key].name)
            ? (
              <TableGrouped
                key={key}
                title={serverList[key].name}
                rowData={this.group(serverList[key].servers)}
              />)
            : <Table key={key} title={serverList[key].name} rowData={serverList[key].servers} />
          ))}
      </div>)
      : <div className="loading-screen">Loading...</div>;
  }
}

export default ServersPage;
