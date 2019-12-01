import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import Contact from './pages/Contact';
import SignInForm from './form';

const routes = () => (
<Switch>
    <Route exact path='/home' component={Home} />
    <Route path='/contact' component={Contact} />
    <Route path='' component={SignInForm} />
</Switch>
)

export default routes