export const CHANGE_IPT_VAL = 'changeIptVal'
export const ADD_ITEM = 'addItem'
export const DELETE_ITEM = 'deleteItem'

export const changeIptValAction = (value) => ({
  type:CHANGE_IPT_VAL,
  value
})

export const addItemAction = (value) => ({
  type:ADD_ITEM
})

export const deleteItemAction = (index) => ({
  type:DELETE_ITEM,
  index
})