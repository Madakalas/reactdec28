import {BrowserRouter} from 'react-router-dom'
import Bar from '../Routing/Bar'
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min'
import Home from '../Reactaal/Home'
import Contacts from '../Reactaal/Details'
let App=()=>{
    return <>
    <BrowserRouter>
        <Navbar/>

        <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/contacts" component={Contacts}/>
        </Switch>
    </BrowserRouter>
    </>
}
export default App