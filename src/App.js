import React, { Component } from 'react';
import './App.css';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import Nav from './component/Nav';
import Home from './routes/Home';
import Staff from './routes/Staff';
import PAYE from './routes/PAYE';
import 'bootstrap/dist/css/bootstrap.css';


class App extends Component {
  render() {
    return (
      <div className="App">
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
      </div>

    );
  }
}

export default App;
