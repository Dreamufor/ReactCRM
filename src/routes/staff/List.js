import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Link } from 'react-router-dom';

class List extends Component {
  constructor(props, context){
      super(props, context)
  }


  render() {
    let {data} = this.props;
    return (
     <ul className="list-group">
       {data.map((item, index) => {
         let {id, name} = item;
         return (
           //another way to redirect to detail page,add to li
           //onClick={e => {this.props.history.push('/staff/detail')}}
            <li className="list-group-item" key={id}>
              <Link to={{
                // pathname: '/staff/detail', 
                //search: `?id=${id}`, //问号传参
                //state: id //state 传参
                pathname: `/staff/detail/${id}`
              }}>
                  ID：{id}
                  &nbsp;&nbsp;
                  Name：{name}
              </Link>
            </li>
         )
       })}
    </ul>
    )
  }
}



export default connect(state => ({...state.staff}),)(List);
