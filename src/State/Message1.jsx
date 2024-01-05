import React from "react";
class Message1 extends React.Component{
    msg="hello"
    state={
        msg:'hello'
    }
    gmhandler=()=>{
        this.setState({msg:'gm'})
    }
    gnhandler=()=>{
        this.setState({msg:'gn'})
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Message Component:{this.state.msg}</h3>
            <button onClick={this.gmhandler}>GM</button>
            <button onClick={this.gnhandler}>GN</button>
        </div>
    }

}
export default Message1