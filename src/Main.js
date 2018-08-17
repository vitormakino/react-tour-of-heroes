import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VisibleHeroes from './VisibleHeroes';
import HeroDetail from './HeroDetail';
import TopHeroesDashboard from './TopHeroesDashboard';


const Main = () => (
 <Switch>
  <Route path='/heroes' component={VisibleHeroes}/>
  <Route path='/dashboard' component={TopHeroesDashboard}/>
  <Route path='/details/:id' component={HeroDetail}/>
 </Switch>
);

export default Main;