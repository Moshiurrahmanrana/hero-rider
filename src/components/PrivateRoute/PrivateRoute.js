import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import UserContext from '../../userContext';

const PrivateRoute = ({children, ...rest}) => {
    const[user ,setUser] = useContext(UserContext);

    return <>
    <Route
            {...rest}
            render={({ location }) =>
                user.isLoggedIn ? (
                    children
                ) : (
                    <Redirect
                            to={{
                                pathname: "/login",
                                state: { from : location}
                            }}
                    />
                )
            }
        />
    </>
}
                    

export default PrivateRoute;