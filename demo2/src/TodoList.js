import React from 'react'
import { connect } from 'react-redux'


import { Button, List, Input } from 'antd'

import './TodoList.css'


import * as mainAction  from './store/action/main'

const TodoList = function(props) {
    let { inputValue, changeIptVal, clickBtn, deletItem, list }  = props
    return (
      <div style={{margin:'10px'}}>
      <Input onChange={changeIptVal} onPressEnter={clickBtn} value={inputValue} placeholder="Write Something" allowClear style={{width:'250px',marginRight:'10px'}} />

      <Button type="primary" onClick={clickBtn}>增加</Button>

      <div style={{marginTop:'10px',width:'300px'}}>
        <List
        bordered
        dataSource={list}
        renderItem={(item,index) => (
          <List.Item className="list-item">
            <span>{item}</span>
            <Button type="danger" size="small" onClick={() => deletItem(index)}>删除</Button>
          </List.Item>
        )}/>
      </div>
    </div>
  )
}

const stateToProps = (state) => {
  return {
    inputValue:state.inputValue,
    list:state.list
  }
}

const dispatchToProps = (dispatch) => {
  return {
    changeIptVal: (e) => dispatch(mainAction.changeIptValAction(e.target.value)),
    clickBtn(e) {dispatch({ type:mainAction.ADD_ITEM })},
    deletItem: (index) => dispatch({type: mainAction.DELETE_ITEM, index })
  }
}

export default connect(stateToProps, dispatchToProps)(TodoList)