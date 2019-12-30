// reducer 必须是纯函数，返回的结果只能由参数决定，参数相同，则结果必定相同。

import * as mainAction from './action/main'
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
  let newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case mainAction.CHANGE_IPT_VAL:
      newState.inputValue = action.value
      return newState
    case mainAction.ADD_ITEM:
      newState.list.push(newState.inputValue)
      newState.inputValue = ''
      return newState
    case mainAction.DELETE_ITEM:
      newState.list.splice(action.index,1)
      newState.inputValue = ''
      return newState
    case mainAction.GET_LIST:
      newState.list = action.data
      newState.inputValue = ''
      return newState
    default:
      return state
  }
}