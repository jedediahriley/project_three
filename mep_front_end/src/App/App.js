import React from "react"
import "../App.css"
import { Router, Route } from "react-router-dom"
import { history } from "../utils/history"
import Login from "../components/Login/Login"
import Test1 from "../components/Test"
import Test2 from "../components/Test2"

// Class component
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentUser: null,
            isAdmin: false,
            isQC: false
        }
    }

    componentDidMount() {
        this.setState({
            currentUser: "x",
            isAdmin: true,
            isQC: true
        })
    }

    render() {
        const { currentUser, isAdmin, isQC} = this.state
        // if (!this.state.token) {
        //   return <Login setToken={this.setToken} />
        // }
    
        return(
            <Router history={history}>
                <div className="app">
                    <h1>Material / Equipment Preservation</h1>
                    {currentUser && 
                        <div>
                            <Route path="/login" component={Login} />
                            {isAdmin &&
                                <Route path="/test" component={Test1} />
                            }
                            {isQC && 
                                <Route path="/test2" component={Test2} />
                            }
                        </div>
                    }
                </div>
            </Router>
        )
    }
}

export default App;
