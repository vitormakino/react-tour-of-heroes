import { fetchHeroById } from '../api';

export const addHero = (id, name) => ({type:'ADD_HERO', id, name });
export const editHero = (id, name) => ({type:'EDIT_HERO', id, name });
export const toggleSelectHero = (id) => ({type:'TOGGLE_SELECT_HERO', id });
export const receiveHero = (response) => ({type: 'RECEIVE_HERO', response});

export const fetchHero = (id) => 
  fetchHeroById(id).then(response => receiveHero(response));
