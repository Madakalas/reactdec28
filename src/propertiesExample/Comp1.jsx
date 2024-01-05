import React from "react"
import User from "./User"
class Comp1 extends React.Component{
    Users={
        name:"maximum",
        id:101,
        sal:200000,
        loc:['AP','BH','TS']
    }
    render(){
        return <div>
            <h3> Componnet 1</h3>
            <User user={this.Users} msg={"GM"}/>
        </div>
    }
}
export default Comp1