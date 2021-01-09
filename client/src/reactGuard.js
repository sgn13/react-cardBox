import React from 'react'
import { Route, Redirect } from "react-router-dom";


const RouterGuard = ({ component: Component, auth, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (
            auth === true
                ? <Component {...props} />
                : <Redirect to='/' />
        )} />
    )
}

export default RouterGuard
