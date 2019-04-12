import React, { Component } from 'react';
import {connect} from 'react-redux';

class Create extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
      <div>
        User: <input type="text"/><br/><br/>
        Name: <input type="text"/><br/><br/>
        <button>Add User</button>
      </div>
    )
  }
}

export default connect()(Create);
