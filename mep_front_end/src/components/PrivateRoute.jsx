// code adapted from https://jasonwatmore.com/post/2019/02/01/react-role-based-authorization-tutorial-with-example#projectstructure

import React from "react"
import { Redirect } from "react-router-dom"

import { authenticationService } from "../services/authentication.service"

class PrivateRoute extends React.Component {

    render() {
        const currentUser = authenticationService.currentUserValue
        const roles = this.props.roles
        const Component = this.props.component

        if (!currentUser) {
            // user not logged in, redirect user to login page
            return <Redirect to={{ pathname: "/", state: { from: this.props.location } }} />
        }

        // check if route is restricted by role
        if (roles && roles.indexOf(currentUser.userRole) === -1) {
            // role not authorized for route so redirect to main page
            return <Redirect to={{ pathname: "/main" }} />
        }

        // user is authorised so return component to user
        return <Component props={Component.props} />
    }
}

export default PrivateRoute
