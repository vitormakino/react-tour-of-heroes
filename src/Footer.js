import React from 'react';
import { connect } from 'react-redux'

import { getSelectedHeroes } from './reducers';
import { editHero } from './actions';
import HeroDetail from './HeroDetail';

class Footer extends React.Component {
    render() {
     return <footer>
        {this.props.heroes.map(hero => (
          <HeroDetail key={hero.id}
                      {...hero}
                      onNameChange={(name) => {
                        this.props.onNameChange(hero.id, name);
                      }}/>
        ))}
      </footer>
    }
  }

  const mapStateToProps = (state, { match }) => {
    return {
      heroes: getSelectedHeroes(state)
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      onNameChange: (id, name) => dispatch(editHero(id, name))
    }
  };

  Footer = connect(mapStateToProps, mapDispatchToProps)(Footer);
  export default Footer;