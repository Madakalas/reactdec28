import React from "react"
class User extends React.Component{
    render(){
        return <div>
            <h2> User componnet</h2>
            <pre>{JSON.stringify(this.props)}</pre>
            <hr></hr>
            <h3>UserName:{this.props.user.name}</h3>
            <hr/>
            <h3> UseLoc:{this.props.user.loc[0]}</h3>
        </div>
    }
}
export default User