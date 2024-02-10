import React, { useEffect, useState } from "react";
import Axios from "axios"
const CreateProduct=()=>{
   let[product,setproduct] =useState[{name:'',price:'',qunatity:'',info:'',image:'Test-Image'}]
   let updateHandler=(event)=>{
   setproduct({...product,[event.target.name]:[event.target.value]})

   }

   

   let submitHandler=(event)=>{
    Axios.post('http://127.0.0.1:5000/api/products', product)
   .then((resp)=>{console.log(resp)})
   .catch(()=>{})


   }

    return <>
    <div className="container">
        <div className="row">
            <div className="col-md-3">
                    <div className="card">
                        <div className="cardheader">
                            <div className="cardbody">
                                <div className="form-group">
                                    <label>Product Name</label>
                                    <input type="text" name="name" onChange={updateHandler} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="number" name="price" onChange={updateHandler} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>QTY</label>
                                    <input type="number" name="quantity" onChange={updateHandler} className="form-control"></input>
                                </div>
                                <div className="form-group">
                                    <label>Info</label>
                                    <input type="text" name="info" onChange={updateHandler} className="form-control"></input>
                                </div>
                                <input type="submit" className="btn btn-success" value="create"></input>

                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </div>
    </>
}
export default CreateProduct