import React from "react"
function CompA(props){
        return<div>
            <h3> Compenent A</h3>
            <pre>{JSON.stringify(this.props)}</pre>
            <h3>userID:{props.id}</h3>
            <h3>loaction:{props.loc[0]}</h3>
        </div>
    }
export default CompA