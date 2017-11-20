import { combineReducers } from 'redux';

import { routerReducer } from 'react-router-redux';
import counter from './counter';

// console.log(counter);
// console.log(routerReducer);

const rootReducer = combineReducers({
  counter,
  routerReducer,
});

console.log(rootReducer);

export default rootReducer;
