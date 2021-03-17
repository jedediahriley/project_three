import React from "react"
import "./App.css"
import { Router } from "react-router-dom"
import Routes from "./components/Routes.jsx"
import history from "./utils/history.js"
// import { Redirect } from "react-router-dom"
import { authenticationService } from "./services/authentication.service"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            userRole: ""
        }
    }

    componentDidMount() {
        console.log('App mounted')
        if (!this.state.currentUser) {
            history.push("/")
        }

        authenticationService.currentUser.subscribe(user => this.setState({
            currentUser: user,
            userRole: user.userRole
        }))
    }

    render() {
        return(
            <div>
                <h1>Material / Equipment Preservation</h1>
                <Routes currentUser={this.state.currentUser} userRole={this.state.userRole} />
            </div>
        )
    }
}

export default App;
