import React from "react"
import history from "../utils/history.js"
import bcrypt from "bcryptjs"

let baseURL = ""

if (process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003"
} else {
  baseURL = ""
}

class Signup extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            userName: "",
            password: "",
            userRole: ""
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        this.setState({ [event.currentTarget.id]: event.currentTarget.value })
    }

    handleSubmit(event) {
        event.preventDefault()
        console.log("signup form submitted")
        console.log(this.state)
        fetch(baseURL + "/user", {
            method: "POST",
            body: JSON.stringify({
                name: this.state.name,
                username: this.state.username,
                password: bcrypt.hashSync(this.state.password, bcrypt.genSaltSync(10)),
                userRole: this.state.userRole
            }),
            headers: {
                "Content-type": "application/json"
            }
        })
        .then(res => res.json())
        .then(resJson => {
            console.log(resJson)
            history.push("/main")            
        })
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="name">Full Name: </label>
                <input type="text" name="name" id="name" placeholder="John Doe" onChange={this.handleChange} />
                <label htmlFor="username">Username: </label>
                <input type="username" id="username" name="username" placeholder="username" onChange={this.handleChange} />
                <label htmlFor="password">Password: </label>
                <input type="password" id="password" name="password" placeholder="password" onChange={this.handleChange} />
                <select
                    name="userRole"
                    id="userRole"
                    onChange={this.handleChange}
                    ref={ref => {
                        this.select = ref
                    }}
                    defaultValue={""}
                >
                    <option value="" disabled hidden>Choose user level</option>
                    <option value="Tech">Tech</option>
                    <option value="Admin">Admin</option>
                    <option value="QC">Quality Control</option>
                </select>
                <div>
                    <button type="submit">Signup</button>
                </div>
            </form>
        )
    }
}

export default Signup
