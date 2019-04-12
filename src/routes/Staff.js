import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Route, Switch, Redirect} from 'react-router-dom';
import List from './staff/List';
import Create from './staff/Create';
import Detail from './staff/Detail';
import {NavLink} from 'react-router-dom';


class Staff extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div className="container-fluid">
      <div className="row">
        <div className="col-2">
            <nav className="nav flex-column">
              <NavLink className="nav-link" to='/staff/list'>STAFF LIST</NavLink>
              <NavLink className="nav-link" to='/staff/create'>ADD STAFF</NavLink>
            </nav>
        </div>
        <div className="col-10">
          <div className="tab-content" id="v-pills-tabContent">
          <Switch>
                <Route path='/staff/list' component={List}/>
                <Route path='/staff/create' component={Create}/>
                <Route path='/staff/detail/:id' component={Detail}/>
                {/* set default page*/}
                <Redirect from='/staff' to='/staff/list'/>
          </Switch>
          </div>
        </div>
      </div>
      </div>
    )
  }
}

export default connect()(Staff);
