import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import history from "./utils/history"

import Login from "./components/Login"
import Search from "./components/Search"
import Main from "./components/Main"

class Routes extends React.Component {
    render() {
        const { currentUser, userRole } = this.props
        return(
            <Router history={history}>
                    {currentUser && 
                        <Switch>
                            <Route path="/main">
                                {userRole === "Tech" && <Search />}
                                {userRole !== "Tech" && <Main userRole={userRole} />}
                                {/* {userRole === "QC" && <Main userRole={this.props.userRole} />} */}
                            </Route>
                            <Route path="/search" component={Search} />
                            {/* <Route path="/equipment" component={Equipment} /> */}

                            {/* Default path takes user to login screen */}
                            <Route path="/" component={Login} />
                        </Switch>
                    }
            </Router>

        )
    }
}

export default Routes
