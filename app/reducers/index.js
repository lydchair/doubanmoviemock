import { combineReducers } from 'redux';
import home from './home'
import list from './list'
import details from './details'
import findresult from './findresult'

const rootReducer = combineReducers({
  home,
  list,
  details,
  findresult
})
export default rootReducer
