import React from "react"
import Footer from "./Footer.jsx"
import Header from "./Header.jsx"
import Instructions from "./Instructions"

class Equipment extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            view: this.props.view
        }

        this.handleEditClick = this.handleEditClick.bind(this)
    }

    handleEditClick(newView) {
        console.log(this.view)
        console.log(newView)
        this.setState({
            view: newView
        })
    }



    // getEquipmentObject(view, equipObjectID) {
    //     if(view === "new") {
    //         return null
    //     } else {

    //     }
    // }

    render() {
        const userRole = this.props.userRole
        let view = this.state.view
        return(
            <div>
                <Header
                    userRole={userRole}
                    view={view}
                    // equipmentObject={this.getEquipmentObject(view, equipObjectID)}
                />

                {userRole !== "Tech" && 
                    <Footer
                        userRole={userRole}
                        view={view}
                        handleEditClick={this.handleEditClick}
                    />
                }
            </div>
        )
    }
}

export default Equipment
