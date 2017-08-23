/**
 * 筛选器响应
 * 整个应用的初始状态，可以作为 State 的默认值
 */

const visibilityFilter = (state = "SHOW_ALL", action) =>{

      //console.log('filter_action:',action);

      switch(action.type){
            case "SET_VISIBILITY_FILTER":
                  return action.filter
            default:
                  return state
      }
}

export default visibilityFilter;