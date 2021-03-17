import React from "react"
import history from "../../utils/history.js"

class Header extends React.Component {
    render() {
        const {userRole, view, equipmentObject} = this.props
        return(
            <div>
                <form action="">
                    <div>
                        <label>Equipment Type: </label>
                        <input type="text" readOnly={view === "show"} />
                        <label>Tag Number: </label>
                        <input type="text" readOnly={view === "show"} />
                        <label>PO Number: </label>
                        <input type="text" readOnly={view === "show"} />
                        <label>Location: </label>
                        <input type="text" readOnly={view === "show"} />
                    </div>
                    <button onClick={() => history.push("/inspection_photos")} >Inspection Photos</button>
                    {userRole !== "Tech" && 
                        <div>
                            <label htmlFor="receipt-inspection-check">Receipt Inspection: </label>
                            <input type="checkbox" name="receipt-inspection" id="receipt-inspection" disabled={view === "show"} />
                            <label htmlFor="damage-check">Damage: </label>
                            <input type="checkbox" name="damage" id="damage" disabled={view === "show"} />
                            <button onClick={() => history.push("/damage_photos")} >Damage Photos</button>
                            <button onClick={() => history.push("/inspection_reports")}>Inspection Reports</button>
                        </div>
                    }
                </form>
            </div>
        )
    }
}


export default Header
