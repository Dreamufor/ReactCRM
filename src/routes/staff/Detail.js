import React, { Component } from 'react';
import {connect} from 'react-redux';

class Detail extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div>
        ID : 
        <br/>
        NAME:
      </div>
    )
  }
}

export default connect()(Detail);
