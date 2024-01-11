import React from "react";
import employees from "./data";
class Employeedata extends React.Component{
   constructor(props){
        super(props);
        this.employees=employees
    }
    render(){
        return <div>
            <div className="container">
            <div className="row">
                <div className="col-8">
                    
                        <table className="table" border={"2px"}>
                        <thead className='bg-primary text-white'>
                            <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.employees.map((emp)=>{
                                return <tr key={emp.id}>
                                    <td>{emp.id}</td>
                                    <td>{emp.name}</td>
                                    <td>{emp.email}</td>
                                    <td>{emp.gender}</td>
                                </tr>
                                
                            })}
                        </tbody>


                        </table>
                    
                    </div>
                </div>

            </div>
            </div>
            
    }
}
export default Employeedata