import React from "react"
import history from "../utils/history"

class Main extends React.Component {
    render() {
        const userRole = this.props.userRole
        console.log(userRole)
        return(
            <div>
                <button onClick={() => history.push("/add_equipment")} >Add Equipment</button>
                <button onClick={() => history.push("/search")} >View Equipment</button>
                <button onClick={() => history.push("/add_photos")} >Add Photos</button>
                <button onClick={() => history.push("/add_maintenance_reports")} >Add Maintenance Reports</button>
                <button onClick={() => history.push("/equipment_punch_list")} >Equipment Punch List</button>
                {userRole === "QC" && 
                    <button onClick={() => history.push("/add_administrator")} >Add Administrator</button>
                }
            </div>
        )    
    }
}


export default Main
