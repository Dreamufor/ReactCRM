import React, { Component } from 'react';
import {connect} from 'react-redux';

class PAYE extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div>
        Hahaha
      </div>
    )
  }
}

export default connect()(PAYE);
