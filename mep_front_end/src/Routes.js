import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import history from "./utils/history"

import Login from "./components/Login"
import Search from "./components/Search"
import AdminMain from "./components/Admin_User/Main"
import QCMain from "./components/QC_User/Main"

class Routes extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        const { currentUser, userRole } = this.props
        return(
            <Router history={history}>
                    {currentUser && 
                        <Switch>
                            <Route path="/main">
                                {userRole === "Tech" && <Search />}
                                {userRole === "Admin" && <AdminMain />}
                                {userRole === "QC" && <QCMain />}
                            </Route>
                            <Route path="/search" component={Search} />
                            <Route path="/equipment" component={Equipment} />

                            {/* Default path takes user to login screen */}
                            <Route path="/" component={Login} />
                        </Switch>
                    }
            </Router>

        )
    }
}

export default Routes
