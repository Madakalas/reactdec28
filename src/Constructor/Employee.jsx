import React from "react";
class Employee extends React.Component{

        state={Amount:"50000"}
    
    Inc1=()=>{
        this.setState({Amount:"1,00,000"})

    }
    Inc2=()=>{
        this.setState({Amount:"1,50,000"})
    }
    Inc3=()=>{
        this.setState({Amount:"1"})
    }
    render(){
        return <div>
            <h2> Employee salary</h2>
            <pre>{JSON.stringify(this.state.Amount)}</pre>
            <button onClick={this.Inc1}> 50000</button>
            <button onClick={this.Inc2}> 1,00,000</button>
            <button onClick={this.Inc3}>1</button>
        </div>
    }
}
export default Employee