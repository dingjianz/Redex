import axios from 'axios'

export const CHANGE_IPT_VAL = 'changeIptVal'
export const ADD_ITEM = 'addItem'
export const DELETE_ITEM = 'deleteItem'
export const GET_LIST = 'getList'

export const changeIptValAction = (value) => ({
  type: CHANGE_IPT_VAL,
  value
})

export const getTodoList = () => {
  return (dispatch) => {
    axios.get('https://www.easy-mock.com/mock/5cfcce489dc7c36bd6da2c99/xiaojiejie/getList').then((res) => {
      const data = res.data.data.list
      dispatch({type: GET_LIST,data})
    })
  }
}