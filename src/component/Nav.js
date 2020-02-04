import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link, NavLink} from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon} from 'antd';

class Nav extends Component {

  render() {
    const {Header} = Layout;
    return (
      <div>
        <Header className="header">
            <div className="logo"><Link to={{pathname: '/', search: '?lx=logo'}}></Link></div>
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={['1']}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="1"><NavLink to='/' exact>Home</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to='/staff'>Staff</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to='/paye'>PAYE</NavLink></Menu.Item>
            </Menu>
        </Header>
      </div>
    
    )
  }
}

export default connect()(Nav);
