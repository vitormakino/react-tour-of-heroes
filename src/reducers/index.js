import { combineReducers } from 'redux';

const hero = (state = {}, action) => {
    switch(action.type) {
        case 'ADD_HERO':
          return {...state, id: action.id, name: action.name };
        case 'EDIT_HERO':
          return {...state, name: action.name };
        case 'RECEIVE_HERO':
        case 'REQUEST_HERO':
            return {...state, action };  
        default:
            return state;
    }
};

export const heroes = (state = [], action) => {
    switch(action.type) {
        case 'ADD_HERO':
          return [...state,hero(undefined, action)];
        case 'EDIT_HERO':
          return state.map(h => h.id === action.id ? hero(h, action) : h);
        case 'REMOVE_HERO':
          return state.filter(h => h.id !== action.id);
        default:
          return state;
    }
};

export const heroesById = (state={}, action ) => {
  switch(action.type) {
    case 'RECEIVE_HERO':
    case 'REQUEST_HERO':
      return {...state,
              [action.id]: hero(state[action.id], action)};
    default:
      return state
  }
};

export const selectedHero = (state = {}, action) => {
  switch(action.type) {
      case 'TOGGLE_SELECT_HERO':
        return action.id;
      default:
        return state;
  }
};


const getAllHeroes = (state) => state.heroes;
export const getIdSelectedHero = (state) => state.selectedHero;
export const getHeroById = (state, id) => state.heroesById[id];
export const getSelectedHeroes = (state) => {
  const all = getAllHeroes(state);
  const id = getIdSelectedHero(state);
  if(!id) {
    return [];
  }

  return all.filter(hero => id === hero.id);
};

export default combineReducers({ heroes, heroesById, selectedHero});