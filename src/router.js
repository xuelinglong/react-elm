import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './views/home/Home.jsx';
import Search from './views/search/Search.jsx';
import Order from './views/order/Order.jsx';
import User from './views/user/User.jsx';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/search' component={Search}/>
      <Route exact path='/order' component={Order}/>
      <Route exact path='/user' component={User}/>
    </Switch>
  </main>
)

export default Main;