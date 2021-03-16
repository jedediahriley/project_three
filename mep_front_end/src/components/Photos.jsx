import React from "react"

class Photos extends React.Component {
    render() {
        const userRole = this.props.userRole
        
        return(
            <div>
                <h4>Photos</h4>
                {userRole}
            </div>
        )
    }
}


export default Photos
