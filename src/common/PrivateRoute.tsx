import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { StoreState } from "../state/reducers";
//https://stackoverflow.com/questions/47747754/how-to-rewrite-the-protected-private-route-using-typescript-and-react-router-4
const PrivateRoute = ({component, auth, ...rest}: any) => {
    const routeComponent = (props: any) => (
        auth.isAuthenticated 
            ? React.createElement(component, props)
            : <Redirect to = {{pathname: '/login'}}
             />
    )
    return <Route {...rest} render = { routeComponent } />
}

const mapStateToProps = (state: StoreState) => ({
    auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);