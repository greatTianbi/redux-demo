/**
 * reducer:指明如何更新state
 * Store 收到 Action 以后，必须给出一个新的 State，这样 View 才会发生变化。这种 State 的计算过程就叫做 Reducer。
 * 根 reducer把多个子 reducer 输出合并成一个单一的 state 树
 * Redux 原生提供combineReducers()辅助函数，来把根 reducer 拆分成多个函数，用于分别处理 state 树的一个分支
 * Reducer 函数最重要的特征是，它是一个纯函数。也就是说，只要是同样的输入，必定得到同样的输出。
 * */
import todos from "./todo"
import visibilityFilter from "./visibilityFilter"
import { combineReducers } from "redux"

const todoApp = combineReducers({
      todos,
      visibilityFilter
})

export default todoApp