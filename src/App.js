import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './component/Nav';
import Home from './routes/Home';
import Staff from './routes/Staff';
import PAYE from './routes/PAYE';
import 'bootstrap/dist/css/bootstrap.css';
import { Row, Col, Layout, Menu, Breadcrumb, Icon, } from 'antd';

const {
  Header, Content, Footer, Sider,
} = Layout; 
class App extends Component {
  render() {
    return (
      <div className="App">
        <Row type="flex" justify="center">
        <Col span={20}>
        <HashRouter>
          <div>
            <Nav />
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/staff' component={Staff}/>
              <Route path='/paye' component={PAYE}/>
              <Redirect to='/?lx=unsafe'/>
            </Switch>
          </div>
        </HashRouter>
        </Col>
        </Row>
      </div>

    );
  }
}

export default App;
