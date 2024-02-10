import React from "react";
import Product from "./Products"
import CreateProduct from "./CreateProduct"
import {Link,BrowserRouter,Switch,Route} from 'react-router-dom'
const NavbarExtend=()=>{
    

    return (<div>
        
        <BrowserRouter>
        <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
            <Link to="/" className="navbar-brand"> Product CRUD</Link>
            <div className='ml-auto'>
                <ul className='navbar-nav'>
                    <li><Link to="/products" className="nav-link">Products</Link></li>
                    <li><Link to="/admin" className="nav-link">Admin</Link></li>
                    <li><Link to="/CreateProduct" className="nav-link">New Product</Link></li>
                </ul>
            </div>
        </nav>
        <Switch>
            <Route path="/products" component={Product}/>
            <Route path="/CreateProduct" component={CreateProduct}/>
        </Switch>
        </BrowserRouter>
    </div>
    )
}
export default NavbarExtend