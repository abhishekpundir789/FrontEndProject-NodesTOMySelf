import React from 'react';
import { Route, Redirect } from "react-router-dom";

export default function GuardedRoute  ({ component: Component, auth, ...rest }) {
    return (
    <Route {...rest} render={(props) => (
        auth === true
            ? <Component user ={rest.user} {...props} />
            : <Redirect to='/login' />
    )} />
    );
}