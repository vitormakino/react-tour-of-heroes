import { createStore, applyMiddleware  } from 'redux';
import heroApp from './reducers';
import { HEROES } from './api';

const logger = ({ getState }) => next => action => {
  console.group(action.type);
  console.log('%c prev state ','color: gray',getState());
  console.log('%c action','color: green',action);
  const returnValue = next(action);
  console.log('%c next state','color: blue',getState());
  console.groupEnd(action.type);
  return returnValue;
}

export default () => {
  const initialState = {
    heroes: HEROES
  };

  const store = 
    createStore(heroApp,
                initialState,
                applyMiddleware(logger) );

  return store;
};
