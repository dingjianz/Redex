import React, { Component } from 'react'

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <h1>List-page----{this.props.match.params.id}</h1>
      </div>
    )
  }
}

export default List