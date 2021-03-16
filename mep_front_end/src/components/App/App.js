import React from "react"
import "../../App.css"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Login from "../Login/Login"
import Test from "../Test"

// Class component
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            token: ""
        }
    }

  render() {
        // if (!this.state.token) {
        //   return <Login setToken={this.setToken} />
        // }
    
        return(
            <div className="app">
                <h1>Material / Equipment Preservation</h1>
                <BrowserRouter>
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/test" component={Test} />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;
