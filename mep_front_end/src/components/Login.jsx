import React from "react"
import bcrypt from "bcryptjs"
import history from "../utils/history.js"
import { authenticationService } from "../services/authentication.service.js"

// let baseURL = ""

// if (process.env.NODE_ENV === "development") {
//   baseURL = "http://localhost:3003"
// } else {
//   baseURL = ""
// }

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            password: ""
        }

        if (authenticationService.currentUserValue) {
            history.push("/main")
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    loginUser(username, password) {
        authenticationService.login(username, password)
            .then(
                user => {
                    const {from} = this.props.location.state || {from: {pathname: "/"}}
                    history.push(from)
                },
                error => {
                    console.log(error)
                }
            )
        
        // fetch(baseURL + "/login", {
        //     method: "POST",
        //     headers: {
        //         "Content-type": "application/json"
        //     },
        //     body: JSON.stringify(credentials)
        // })
        // .then(data => data.json())
        // .catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        const username = this.state.username
        const password = bcrypt.hashSync(this.state.password, bcrypt.genSaltSync(10))
        this.loginUser(username, password)

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="email">Email: </label>
                <input type="email" id="email" name="email" placeholder="email" onChange={this.handleChange} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="password" onChange={this.handleChange} />
                <div>
                    <button type="submit">Login</button>
                </div>
            </form>
        )
    }
}

export default Login
