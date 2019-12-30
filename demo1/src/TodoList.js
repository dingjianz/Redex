import React from 'react'
import store from './store'

import TodoListUI from './TodoListUI'

import { changeIptValAction, addItemAction, deleteItemAction, getTodoList } from './store/action/main'


class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = store.getState()
    store.subscribe(this.storeChange) // 新版本不需要手动订阅
  }


  render() {
    return (
      <TodoListUI
      inputValue={this.state.inputValue}
      changeIptVal={this.changeIptVal}
      value={this.state.value}
      clickBtn={this.clickBtn}
      deletItem={this.deletItem}
      list={this.state.list}
      />
    )
  }


componentDidMount(){
  store.dispatch(getTodoList())
}
  changeIptVal = (e) => {
    const action = changeIptValAction(e.target.value)
    store.dispatch(action)
  }

  clickBtn = () => {
    const action = addItemAction()
    store.dispatch(action)
  }

  deletItem = (index) => {
    const action = deleteItemAction(index)
    store.dispatch(action)
  }

  storeChange = () => {
    this.setState(store.getState())
  }
}

export default TodoList