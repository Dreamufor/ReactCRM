import React, { Component } from 'react';
import {connect} from 'react-redux';
import { existsSync } from 'fs';
import Qs from 'qs'

class Detail extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    //1，问号传参
    // let { location:{search}, data } = this.props,
    //      staffID = Qs.parse(search.substr(1)).id || 0 ;
    // staffID = parseFloat(staffID);
    //2,基于state传值
    // let { location:{state}, data } = this.props,
    // staffID = state || 0 ;
    // staffID = parseFloat(staffID);
    // let item = data.find(item => parseFloat(item.id) === staffID);
    //3 URL地址参数
    console.log(this.props);
      let { match:{params}, data } = this.props,
         staffID = params.id || 0 ; //=> path=`/staff/detail/${id}`
      staffID = parseFloat(staffID);
      let item = data.find(item => parseFloat(item.id) === staffID);
    if(!item) return "The user doesn't exist";
    return(
      <div>
        ID : {item.id}
        <br/>
        NAME: {item.name}
      </div>
    );
  }
}

export default connect(state => ({...state.staff}))(Detail);
