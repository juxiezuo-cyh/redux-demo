// 定义action 
import { ADD_NUMBER, ADD_ONE } from "./constants"

export const actions = num => ({
  type: ADD_NUMBER,
  num
})

export const actions1 = () => ({
  type: ADD_ONE,
})