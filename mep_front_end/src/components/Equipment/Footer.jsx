import React from "react"
import history from "../../utils/history.js"

class Footer extends React.Component {
    constructor(props) {
        super(props)

        this.handleStartEdit = this.handleStartEdit.bind(this)
        this.handleCancelEdit = this.handleCancelEdit.bind(this)
    }

    handleStartEdit(event) {
        event.preventDefault()
        console.log('test')
        console.log(this.props.view)
        let newView = "update"
        this.props.handleEditClick(newView)
    }

    handleCancelEdit(event) {
        event.preventDefault()
        console.log(this.props)
        let newView = "show"
        this.props.handleEditClick(newView)
        history.goBack()
    }

    render() {
        let view = this.props.view
        console.log(this.props)
        return(
            <div>
                <h4>Additional Information</h4>
                <form action="">
                    <label htmlFor="buyer">Buyer: </label>
                    <input type="text" name="buyer" id="buyer" readOnly={view === "show"} />
                    <label htmlFor="buyer-phone">Phone: </label>
                    <input type="text" name="buyer-phone" id="buyer-phone" readOnly={view === "show"} />
                    <label htmlFor="buyer-phone">Email: </label>
                    <input type="text" name="buyer-email" id="buyer-email" readOnly={view === "show"} />
                    <label htmlFor="vendor">Vendor: </label>
                    <input type="text" name="vendor" id="vendor"/>
                    <label htmlFor="vendor-phone">Phone: </label>
                    <input type="text" name="vendor-phone" id="vendor-phone" readOnly={view === "show"} />
                    <label htmlFor="vendor-email">Phone: </label>
                    <input type="text" name="vendor-email" id="vendor-email" readOnly={view === "show"} />
                    <label htmlFor="vendor-address">Address: </label>
                    <input type="textarea" name="vendor-address" id="vendor-address" readOnly={view === "show"} />

                    {view === "show"
                        ?
                        <button onClick={this.handleStartEdit}>Edit Equipment</button>
                        :
                        <div>
                            <button>Submit</button>
                            <button onClick={this.handleCancelEdit}>Cancel</button>
                        </div>
                    }
                </form>
            </div>
        )
    }
}


export default Footer
