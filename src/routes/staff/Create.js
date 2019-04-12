import React, { Component } from 'react';
import {connect} from 'react-redux';
import action from '../../store/action';

class Create extends Component {
  constructor(props, context){
      super(props, context)
  }

  submit = (e) => {
      let {USER_ID, USER_NAME} = this.refs,
          {create,history} = this.props;
      create({
        id: USER_ID.value,
        name: USER_NAME.value
      });
      USER_ID.value = USER_NAME.value = '';
      //Go List.
      history.push('/staff/list'); 
  }

  render() {
    return (
      <div>
        User: <input type="text" ref="USER_ID"/><br/><br/>
        Name: <input type="text" ref="USER_NAME"/><br/><br/>
        <button onClick={this.submit}>Add User</button>
      </div>
    )
  }
}

export default connect(state => ({...state.staff}),action.staff)(Create);
