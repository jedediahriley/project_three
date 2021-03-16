import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import history from "./utils/history"

import Login from "./components/Login.jsx"
import Search from "./components/Search.jsx"
import Main from "./components/Main.jsx"
import Equipment from "./components/Equipment/Equipment.jsx"
import Photos from "./components/Photos.jsx"
import Signup from "./components/Signup"

class Routes extends React.Component {


    render() {
        const { currentUser, userRole } = this.props
        return(
            <Router history={history}>
                    {currentUser && 
                        <Switch>
                            <Route 
                                path="/signup"
                                component={Signup}
                            />
                            <Route path="/main">
                                {userRole === "Tech" && <Search />}
                                {userRole !== "Tech" && <Main userRole={userRole} />}
                            </Route>
                            <Route
                                path="/search"
                                component={Search}
                            />
                            <Route
                                path="/add_equipment"
                                render={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="new"
                                    />
                                )}
                            />
                            <Route
                                path="/view_equipment"
                                render={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="show"
                                    />
                                )}
                            />
                            <Route
                                path="/update_equipment"
                                render={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="update"
                                    />
                                )}
                            />
                            <Route
                                path="/inspection_photos"
                                render={(props) => (
                                    <Photos {...props}
                                        userRole={userRole}
                                        type="inspection"
                                    />
                                )}
                            />
                            <Route
                                path="/damage_photos"
                                render={(props) => (
                                    <Photos {...props}
                                        userRole={userRole}
                                        type="damage"
                                    />
                                )}
                            />

                            {/* Default path takes user to login screen */}
                            <Route path="/" component={Login} />
                        </Switch>
                    }
            </Router>

        )
    }
}

export default Routes
