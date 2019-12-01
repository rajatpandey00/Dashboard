import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { SignInForm, SignUpForm } from './form';

// // exact path  must be mentioned first
const routes = () => (
    <Switch>
        <Route exact path='/signup' component={SignUpForm} />
        <Route path='' component={SignInForm} />
    </Switch>
)

export default routes