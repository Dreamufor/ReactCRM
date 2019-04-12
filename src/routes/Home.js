import React, { Component } from 'react';
import {connect} from 'react-redux';

class Home extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div>
        This is a Home page;
      </div>
    )
  }
}

export default connect()(Home);
