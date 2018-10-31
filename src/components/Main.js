import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import LearnVJs from './pages/learn_vanilla_js';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/pages/learn_vanilla_js' component={LearnVJs}/>
    </Switch>
  </main>
)

export default Main