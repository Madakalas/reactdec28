import React from "react";

import {Link} from 'react-router-dom'
const Bar=()=>{
    return <div>
            <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <a href="#" className='navbar-brand'>Logo</a>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/Home" className='nav-link'>Home</Link></li>
                    <li><Link to="/Contacts" className='nav-link'>Contacts</Link></li>
                </ul>
                </div>
                </nav>
        </div>
        
         
}
export default Bar