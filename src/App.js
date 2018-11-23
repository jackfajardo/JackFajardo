import React, { Component } from 'react';
import './App.css';
import logo from './site-logo.png'
import tooth from './tooth.png'

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    $('#datatable').DataTable({});
  }
  render() {
    return (
      <div>
        <div className="grid">
          <Header />
          <Aside />
          <Side />
          <Article />
        </div>
      </div>
    );
  }
}

const Header = () => {
  return (
    <header>
      <div className="header-img">
        <img className="logo" alt="site-logo" src={logo} />
      </div>
      <div className="header-time">
        <p>Wed. Nov 21, 12:00PM <i aria-hidden='true' class='bell outline icon' /></p>
      </div>
      <div className="header-account">
        <label className="user"><i aria-hidden='true' class='user outline icon' /> masteradmin <i aria-hidden='true' class='dropdown icon' /></label>
      </div>
    </header>
  );
};

const Aside = () => {
  return (
    <aside class='ui left vertical visible sidebar labeled icon menu'>
      <div className="card">
         <i aria-hidden='true' class='check square big icon' />
         <p className="sidetext">Authorizations</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='building big icon' />
         <p className="sidetext">Account</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='cubes big icon' />
         <p className="sidetext">Plans</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='h big icon' />
         <p className="sidetext">Coverage</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='medkit big icon green' />
         <p className="sidetext green">Benefits</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='cut big icon' />
         <p className="sidetext">Procedures</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='eyedropper big icon' />
         <p className="sidetext">Diseases</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='medkit big icon' />
         <p className="sidetext">Pharmacies</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='sitemap big icon' />
         <p className="sidetext">Clusters</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='ban big icon' />
         <p className="sidetext">Exclusions</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='cube big icon' />
         <p className="sidetext">Packages</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='heartbeat big icon' />
         <p className="sidetext">RUV's</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='percent big icon' />
         <p className="sidetext">Case Rates</p>
      </div>
      <div className="card">
         <i aria-hidden='true' class='hospital big icon' />
         <p className="sidetext">Facilities</p>
      </div>
    </aside> 
  );
};

const Side = () => {
  return (
    <div id="side"></div>
  );
};

const Article = () => {
  return (
    <article>
      <Nav />
      <Content />
    </article>
  );
};

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav-margin">
        <h2>View Benefit</h2>
        <div class='ui breadcrumb'>
          <label className='nav-text'>DASHBOARD</label>
          <i aria-hidden='true' class='right angle icon divider' />
          <label className='nav-text'>BENEFITS</label>
          <i aria-hidden='true' class='right angle icon divider' />
          <div class='active section'><p className="nav-active"> 0051</p></div>
        </div>
      </div>
    </div>
  );
};

const Table = () => {
  return (
    <div>
      <h3 className="cdt">CDT</h3>
      <table id="datatable" className="ui very basic selectable table tbl-margin ">
        <thead>
          <tr>
            <th className="tbl-text eight wide">CDT CODE</th>
            <th className="tbl-text eight wide">CDT DESCRIPTION</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>90901</td>
            <td>Periodic oral evaluation - established patient</td>
          </tr>
          <tr>
            <td>90902</td>
            <td>Limited oral evaluation - problem focused</td>
          </tr>
          <tr>
            <td>90903</td>
            <td>Re-evaluation - post-operative office visit</td>
          </tr>
          <tr>
            <td>90904</td>
            <td>Periapical each additional radiographic image</td>
          </tr>
          <tr>
            <td>90905</td>
            <td>Bitewing - single radiographic image</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

const Content = () => {
  return (
    <div className="content">
      <div className="context">
        <div className="description"> 
          <img className="tooth" alt="tooth" src={tooth} />
          <div>
            <p className="pad green">0051</p>
            <h2 className="pad">Cleaning</h2>
          </div>
        </div>
        <p className="rider">Riders</p>
        <br /><br />
        <div className="three-fourth">
          <div className="one-fourth">
            <p className="label">LAST UPDATE</p>
            <p className="label">UPDATED BY</p>
            <p className="label">COVERAGE</p>
            <p className="label">CATEGORY</p>
            <p className="label">LIMIT TYPE</p>
            <p className="label">LIMIT</p>
            <p className="label">FREQUENCY</p>
          </div> 
          <br />
          <div className="one-fourth">
            <p className="label-black">11/19/18</p>
            <p className="label-black">masteradmin</p>
            <p className="label-black">Dental</p>
            <p className="label-black">N/A</p>
            <p className="label-black">Peso</p>
            <p className="label-black">15,000</p>
            <p className="label-black">N/A</p>
          </div>   
        </div>
        <br /><hr />
        <Table />
      </div>
    </div>
  );
};

const $ = require('jquery');
$.DataTable = require('datatables.net');
export default App;
