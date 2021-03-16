import React from "react"

class Header extends React.Component {
    render() {
        const {userRole, view} = this.props
        return(
            <div>
                <div className="equipment-header-left">
                    <label>Equipment Type:</label>

                    <label>Tag Number:</label>

                </div>
                <div className="equipment-header-right">
                    <label>PO Number:</label>

                    <label>Location:</label>

                </div>
            </div>
        )
    }
}


export default Header
