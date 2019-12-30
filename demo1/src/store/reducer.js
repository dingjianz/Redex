// reducer 必须是纯函数，返回的结果只能由参数决定，参数相同，则结果必定相同。

import { CHANGE_IPT_VAL, ADD_ITEM, DELETE_ITEM, GET_LIST } from './action/main'
const defaultState = {
  inputValue:'',
  list: [
    '早8点开晨会，分配今天的代码任务',
    '9点需求沟通会',
    '11点正式开发'
  ]
}
export default (state = defaultState, action) => {
  // Reducer 里只能接受 state，不能改变 state

  if (action.type===CHANGE_IPT_VAL) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }

  if (action.type===ADD_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.push(newState.inputValue)
    newState.inputValue = ''
    return newState
  }

  if (action.type===DELETE_ITEM) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list.splice(action.index,1)
    newState.inputValue = ''
    return newState
  }

  if (action.type===GET_LIST) {
    let newState = JSON.parse(JSON.stringify(state))
    newState.list = action.data
    newState.inputValue = ''
    return newState
  }

  return state
}