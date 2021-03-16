import React from "react"
import Header from "./Header"

class Equipment extends React.Component {
    render() {
        const {userRole, view} = this.props
        return(
            <div>
                <Header userRole={userRole} view={view} />
            </div>
        )
    }
}


export default Equipment
