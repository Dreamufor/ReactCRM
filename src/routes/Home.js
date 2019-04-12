import React, { Component } from 'react';
import {connect} from 'react-redux';
import {} from 'antd';
// import '../static/css/antd.css';
import 'antd/dist/antd.css';


// LocaleProvider 国际化组件，把组件汉化
class Home extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    return (
        <div></div>
    )
  }
}

export default connect()(Home);
