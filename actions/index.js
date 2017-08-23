/**
 * 用户行为描述，即描述了有事情发生
 * Action 就是一个描述“发生了什么”的普通对象
 * 可以把 action 理解成新闻的摘要。如 “玛丽喜欢42号文章。” 或者 “任务列表里添加了'学习 Redux 文档'”。
 * 你可以在任何地方调用 store.dispatch(action)，包括组件中、XHR 回调中、甚至定时器中。
 *
 * State 的变化，会导致 View 的变化。但是，用户接触不到 State，只能接触到 View。所以，State 的变化必须是 View 导致的。
 * Action 就是 View 发出的通知，表示 State 应该要发生变化了。
 * Action 是一个对象。其中的type属性是必须的，表示 Action 的名称。其他属性可以自由设置。
 * 可以这样理解，Action 描述当前发生的事情。改变 State 的唯一办法，就是使用 Action。它会运送数据到 Store。
 * */

let nextTodoId = 0;

export const addTodo = (text) =>{//添加数据
      return {
            type:"ADD_TODO",
            id:nextTodoId++,
            text
      }
}

export const setVisibility = (filter) =>{//选择展示条件
      return {
            type:"SET_VISIBILITY_FILTER",
            filter
      }
}

export const toggleTodo = (id) =>{//数据是否选中
      return {
            type:"TOGGLE_TODO",
            id
      }
}