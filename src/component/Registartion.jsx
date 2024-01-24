import React from "react";
class Registration extends React.Component{
    state={email:"",Username:"",Mobile:""}

    updatehandler= (event)=>{
        console.log(event.target.value)
        this.setState({[event.target.email]:event.target.value})
    }

    render(){
        return <div>
            <div className="container mt-5">
                <pre>{JSON.stringify(this.state)}</pre>
                <div className="row">
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">
                                <h4> Registarion</h4>
                                <div className="card-body">
                                    <form>
                                            <div className="form-group">
                                        <label>Email</label>
                                        <input className="form-control" onChange={this.updatehandler} name="email" type="email"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input className="form-control" onChange={this.updatehandler} name="Username" type="text"></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Mobile</label>
                                        <input className="form-control" onChange={this.updatehandler} name="Mobile" type="number"></input>
                                    </div>
                                    </form>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <h4> Registartion componnet</h4>

        </div>
    }
}
export default Registration