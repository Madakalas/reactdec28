import React from "react"
import CompA from "./CompA"
let CompB = ()=>{
    let id = 101
    let name ="maxim"
    let salary =200000
    return <div>
        <h3>ID:{id}</h3>
        <h3>Name:{name}</h3>
        <h3>Sal:{salary}</h3>
        <CompA loc={['bangalore','karnataka']}/>
    </div>
}
export default CompB