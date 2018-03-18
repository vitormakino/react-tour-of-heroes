import React, { Component } from 'react';

import './App.css';
import Heroes from './Heroes';

import HeroDetail from './HeroDetail';

import { fetchHeroes } from './api';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { heroes:[] , selectedHero: {} };
    this.handleHeroSelect = this.handleHeroSelect.bind(this);
    this.handleHeroNameChange = this.handleHeroNameChange.bind(this);
  }

  componentDidMount() {
    fetchHeroes().then(heroes => {
      this.setState({heroes});
    });
  }

  handleHeroSelect(hero) {
    this.setState((prevState, props) => ({
      heroes: prevState.heroes.map(h => ({...h,isSelected: h.id === hero.id  })),
      selectedHero: hero
    }));
  }

  handleHeroNameChange(name) {
    this.setState((prevState, props) => ({
      heroes: prevState.heroes.map(h => ( prevState.selectedHero.id === h.id ? {...h,name} : h )),
      selectedHero: {...prevState.selectedHero, name}
    }));
  }

  render() {
    return (
      <div>
        <Heroes heroes={this.state.heroes}
                onHeroSelect={this.handleHeroSelect} />  
        <HeroDetail {...this.state.selectedHero}
                    onNameChange={this.handleHeroNameChange}/>
      </div>      
    );
  }
}

export default App;
