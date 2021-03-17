import React from "react"
import { Router, Switch, Route } from "react-router-dom"
import history from "../utils/history.js"
import PrivateRoute from "../components/PrivateRoute"

import Login from "./Login.jsx"
import Search from "./Search.jsx"
import Main from "./Main.jsx"
import Equipment from "./Equipment/Equipment.jsx"
import Photos from "./Photos.jsx"
import Signup from "./Signup.jsx"

class Routes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: this.props.currentUser,
            userRole: this.props.userRole
        }
    }

    render() {
        const { currentUser, userRole } = this.state
        return(
            <Router history={history}>
                    {currentUser && 
                        <Switch>
                            <Route
                                pathname="/signup"
                                component={Signup}
                            />
                            <Route
                                pathname="/main" 
                                component={userRole === "Tech" ? Search : Main}
                                roles={["Tech", "Admin", "QC"]}
                            />
                                {/* {userRole === "Tech" && <Search />}
                                {userRole !== "Tech" && <Main userRole={userRole} />}
                            </Route> */}
                            <PrivateRoute
                                pathname="/search"
                                component={Search}
                                roles={["Tech", "Admin", "QC"]}
                            />
                            <PrivateRoute
                                pathname="/add_equipment"
                                component={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="new"
                                    />
                                )}
                                roles={["Admin", "QC"]}
                                />
                            <PrivateRoute
                                pathname="/view_equipment"
                                component={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="show"
                                    />
                                )}
                                roles={["Tech", "Admin", "QC"]}
                                />
                            <PrivateRoute
                                pathname="/update_equipment"
                                component={(props) => (
                                    <Equipment {...props}
                                        userRole={userRole}
                                        view="update"
                                    />
                                )}
                                roles={["Admin", "QC"]}
                                />
                            <PrivateRoute
                                pathname="/inspection_photos"
                                component={(props) => (
                                    <Photos {...props}
                                        userRole={userRole}
                                        type="inspection"
                                    />
                                )}
                                roles={["Tech", "Admin", "QC"]}
                                />
                            <PrivateRoute
                                pathname="/damage_photos"
                                component={(props) => (
                                    <Photos {...props}
                                        userRole={userRole}
                                        type="damage"
                                    />
                                )}
                                roles={["Admin", "QC"]}
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
