import React from 'react'
import { Button, List, Input } from 'antd'

import './TodoList.css'

 const TodoListUI = function(props) { // 无状态组件
  return (
    <div style={{margin:'10px'}}>
      <Input onChange={props.changeIptVal} onPressEnter={props.clickBtn} value={props.inputValue} placeholder="Write Something" allowClear style={{width:'250px',marginRight:'10px'}} />

      <Button type="primary" onClick={props.clickBtn}>增加</Button>

      <div style={{marginTop:'10px',width:'300px'}}>
        <List
        bordered
        dataSource={props.list}
        renderItem={(item,index) => (
          <List.Item className="list-item">
            <span>{item}</span>
            <Button type="danger" size="small" onClick={() => props.deletItem(index)}>删除</Button>
          </List.Item>
        )}/>
      </div>
    </div>
  )
} 
export default TodoListUI