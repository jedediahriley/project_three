import React from "react"
import "./App.css"
import Routes from "./Routes.jsx"


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            userRole: null
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: "x",
            userRole: "Admin"
        })
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
