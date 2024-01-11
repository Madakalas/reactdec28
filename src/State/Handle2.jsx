import React from "react";
class Handle2 extends React.Component{
    state={msg:"hello"}
    gmhandle=()=>{
        this.setState({msg:"Good Morning"})
    }
    gnhandle =()=>{
        this.setState({msg:"GoodNight"})
    }
    render(){
        return <div>
            <h2> Handler component using state</h2>
            <pre>{JSON.stringify(this.state.msg)}</pre>
            <button onClick={this.gmhandle}> GM</button>
            <button onClick={this.gnhandle}>GN</button>
            <h3>{this.setState.msg}</h3>

        </div>

    }

}
export default Handle2