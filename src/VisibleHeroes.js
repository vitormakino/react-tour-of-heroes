import { connect } from 'react-redux'
import * as actions from './actions';

import Heroes from './Heroes';
import { getIdSelectedHero } from './reducers';

const mapStateToProps = (state) => {
  return {
    heroes: getSelectedHeroes(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroSelect: (hero) => dispatch(actions.toggleSelectHero(hero.id))
  }
};

const getSelectedHeroes = state => {
  const id = getIdSelectedHero(state);
  return state.heroes.map(hero => ({...hero, isSelected: hero.id === id }));
};

const VisibleHeroes = connect(mapStateToProps, mapDispatchToProps)(Heroes);
export default VisibleHeroes;