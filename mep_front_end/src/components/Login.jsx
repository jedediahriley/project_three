import React from "react"

let baseURL = ""

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003"
} else {
  baseURL = ""
}

class Login extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    loginUser( credentials ) {
        fetch(baseURL + "/login", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(credentials)
        })
        .then(data => data.json())
        .catch(error => console.log(error))
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log('login form submitted')

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
