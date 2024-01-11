import React from "react";
class Handle extends React.Component{
    qty=1;
    inchandler=()=>{
        this.setState.qty=+1

    }
    dechandler=()=>{
        this.setState.qty=-1
    }
render(){
    return <div>
            <h2> Handlers</h2>
            <pre>{JSON.stringify(this.qty)}</pre>
            <h3>{this.setState.qty}</h3>
            <button onClick={this.inchandler }>Increment</button>
           <button onClick={this.dechandler}> Decrement</button>

    </div>


}


}
export default Handle