import React from 'react';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';

import './HeroDetail.css';
import { editHero, fetchHero } from './actions';
import { getSelectedHeroes, getHeroById } from './reducers';

class HeroDetail extends React.Component {
    constructor(props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {
      const {id, fetchHeroById} = this.props;
      fetchHeroById(id);
    }

    handleChange(event) {
      const { id, onNameChange } = this.props;  
      onNameChange(id, event.target.value);     
    }

    render() {
        
        const { id, name } = this.props;

        if(!id) {
            return <span>Loading...</span>;
        }
        return (
            <div className="hero-details">
             <h2>{name} Details</h2>
             <div><span>id: </span>{id}</div>
             <div>
               <label htmlFor="name">name: </label>
               <input type="text"
                      placeholder="name"
                      value={name}
                      onChange={this.handleChange}/>
             </div>
            </div>
            );
    }
}

const mapStateToProps = (state, { match }) => {
  const id = match.params.id;
  const hero = getHeroById(state,id);
  console.log(hero);
  return {
    ...hero,
    id
  }
};
  
const mapDispatchToProps = (dispatch) => {
  return {
    onNameChange: (id, name) => dispatch(editHero(id, name)),
    fetchHeroById: (id) => dispatch(fetchHero(id))
  }
};

HeroDetail = withRouter(connect(mapStateToProps, mapDispatchToProps)(HeroDetail));
export default HeroDetail;