import React from 'react';
import { connect } from 'react-redux'

import PreviewHero from './PreviewHero';

import { getSelectedHeroes } from './reducers';

class Footer extends React.Component {
    render() {
     return <footer>
        {this.props.heroes.map(hero => (
          <PreviewHero key={hero.id}
                       {...hero} />
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
//      onNameChange: (id, name) => dispatch(editHero(id, name))
    }
  };

  Footer = connect(mapStateToProps, mapDispatchToProps)(Footer);
  export default Footer;