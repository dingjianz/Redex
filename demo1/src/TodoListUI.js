import React from 'react'
import { Button, List, Input } from 'antd'

import './TodoList.css'

class TodoListUI extends React.Component {
  constructor(props) {
    super(props)
    this.state = {  }
  }
  render() { 
    return (
      <div style={{margin:'10px'}}>
        <Input onChange={this.props.changeIptVal} onPressEnter={this.props.clickBtn} value={this.props.inputValue} placeholder="Write Something" allowClear style={{width:'250px',marginRight:'10px'}} />

        <Button type="primary" onClick={this.props.clickBtn}>增加</Button>

        <div style={{marginTop:'10px',width:'300px'}}>
          <List
          bordered
          dataSource={this.props.list}
          renderItem={(item,index) => (
            <List.Item className="list-item">
              <span>{item}</span>
              <Button type="danger" size="small" onClick={() => this.props.deletItem(index)}>删除</Button>
            </List.Item>
          )}/>
        </div>
      </div>
    )
  }
} 
export default TodoListUI