import React from "react";

class Printingdata extends React.Component{
    state={email:"",password:""}
    emailhandler=(event)=>{
        this.setState({email:event.target.value})
    }
    passwordhandler=(event)=>{
        this.setState({password:event.target.value})
    }
    render(){
        return <div>
            <pre>{JSON.stringify(this.state)}</pre>
            <form>
            <label>Email:</label>
            <input type="email" onChange={this.emailhandler}></input>
            <label> Password</label>
            <input type="password" onChange={this.passwordhandler}></input>
            <button>Login</button>
            </form>
        </div>
    }
}
export default Printingdata