import React from "react"

class UserMain extends React.Component {
    constructor(props) {
        super(props)

        this.handleSearchByPO = this.handleSearchByPO.bind(this)
        this.handleSearchByTag = this.handleSearchByTag.bind(this)
    }

    handleSearchByPO() {

    }

    handleSearchByTag() {

    }

    render() {
        return(
            <div>
                <button onClick={this.handleSearchByPO} >Lookup by PO Number</button>
                <button onClick={this.handleSearchByTag} >Lookup by Tag Number</button>
            </div>
        )    
    }
}


export default UserMain
