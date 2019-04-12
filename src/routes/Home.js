import React, { Component } from 'react';
import {connect} from 'react-redux';
import {LocaleProvider, DatePicker, Icon, Button} from 'antd';
// LocaleProvider 国际化组件，把组件汉化
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
