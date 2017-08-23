/**
 *针对用户行为进行响应事件
 * Reducer 是一个函数，它接受 Action 和当前 State 作为参数，返回一个新的 State。
 * 由于 Reducer 是纯函数，就可以保证同样的State，必定得到同样的 View。
 * 但也正因为这一点，Reducer 函数里面不能改变 State，必须返回一个全新的对象。
 * */

const todo = (state, action) =>{//单个数据

      //console.log('state:',state);
      //console.log('action:',action);

      switch (action.type){
            case "ADD_TODO":
                  return {
                        id:action.id,
                        text:action.text,
                        completed:false
                  }
            case "TOGGLE_TODO":
                  if(state.id !== action.id){
                        return state
                  }
                  //assign:es6新方法，将后面两个对象合并，放在第一个参数{}里面，返回{}对象，不改变原有state
                  return Object.assign({}, state, {
                        completed: !state.completed
                  })
            default:
                  return state
      }
}

const todos = (state = [], action) =>{//整个数据列表

      //console.log('states:',state);
      //console.log('actions:',action);

      switch(action.type){
            case "ADD_TODO":
                  return [
                        ...state,
                        todo(undefined, action)
                  ]
            case "TOGGLE_TODO":
                  return state.map(t=>todo(t, action))
            default:
                  return state
      }
}

export default todos;