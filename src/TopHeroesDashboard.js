import { connect } from 'react-redux'

import Dashboard from './Dashboard';
import * as actions from './actions';

const mapStateToProps = (state) => {
  return {
    heroes: state.heroes.slice(1,5)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onHeroSelect: (hero) => dispatch(actions.toggleSelectHero(hero.id))
  }
};


const TopHeroesDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);
export default TopHeroesDashboard;