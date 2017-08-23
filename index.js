import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import todoApp from './reducers'
import App from './components/App'

/**
 * 测试数据时使用
 * */
import { addTodo, toggleTodo, setVisibility } from "./actions"

/**
 * Store 就是保存数据的地方，可以把它看成一个容器。整个应用只能有一个 Store。
 * Redux 提供createStore这个函数，用来生成 Store。
 * */
let store = createStore(todoApp)

/**
 * 测试数据start
 * */
 /*//打印初始状态
console.log(store.getState())
// 每次 state 更新时，打印日志
// 注意 subscribe() 返回一个函数,调用该函数即可注销监听器
//Store 允许使用store.subscribe方法设置监听函数，一旦 State 发生变化，就自动执行这个函数。
let unsubscribe = store.subscribe(() =>
      console.log(store.getState())
)
// 发起一系列 action,store.dispatch()是 View 发出 Action 的唯一方法。
store.dispatch(addTodo('Learn about actions'))
store.dispatch(addTodo('Learn about reducers'))
store.dispatch(addTodo('Learn about store'))
store.dispatch(toggleTodo(0))
store.dispatch(toggleTodo(1))
store.dispatch(setVisibility("SHOW_COMPLETED"))

// 停止监听 state 更新
unsubscribe();*/
/**
 * 测试数据end
 * */


/**
 * render方法是由react提供的
 * */
render (
      /**
       * Provider:组件包装器
       * 可以将从createStore返回的store放入context中，使子集可以获取到store并进行操作
       * */
      <Provider store = { store }>
            <App />
      </Provider>,
      document.getElementById('root')
)