import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      list:[
        {cid:'123',title:'jspang的技术博客——————1'},
        {cid:'456',title:'jspang的技术博客——————2'},
        {cid:'789',title:'jspang的技术博客——————3'},
        {cid:'112',title:'jspang的技术博客——————4'}
      ]
    }
    this.props.history.push('/home/')
  }
  render() { 
    return ( 
      <div>
        {/* 路由重定向：  <Redirect to="/home"></Redirect>  */}

        <h1>JSpang.com</h1>
        <ul>
          {this.state.list.map((item) => {
            return (
              <li key={item.cid}><Link to={'/list/'+item.cid}>{item.title}</Link></li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default Index