import React from 'react';
import { Route, Switch } from 'react-router-dom';

import VisibleHeroes from './VisibleHeroes';
import TopHeroesDashboard from './TopHeroesDashboard';


const Main = () => (
 <Switch>
  <Route path='/heroes' component={VisibleHeroes}/>
  <Route path='/dashboard' component={TopHeroesDashboard}/>
 </Switch>
);

export default Main;