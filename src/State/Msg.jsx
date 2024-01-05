import React from "react";
class Msg extends React.Component{
    Message="Hello"
  gmhanlder=()=>{
        this.Message="Good Morning"
        this.forceUpdate()
    }
    gmhandler2=()=>{
        this.Message="Good Night"
        this.forceUpdate()
    }

    render(){
        return <div>
            <h3> Message Component</h3>
            <h2>Wish {this.Message} </h2>
            <button onClick={this.gmhanlder}>GM</button>
            <button onClick={this.gmhandler2}>GN</button>
        </div>
    }
}
export default Msg