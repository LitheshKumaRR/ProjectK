import React,{useState} from "react";
import Navbar from './modules/layout/Navbar'
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Mobile from "./modules/products/Mobile";
import Laptop from "./modules/products/Laptop";

import Watches from "./modules/products/Watches";  
import Upload from "./modules/products/Upload";
import Login from "./modules/users/Login";

import Register from "./modules/users/Register";
import Cart from './modules/orders/Cart'
import Checkout from "./modules/orders/Checkout";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Provider } from "react-redux";
import Store from './modules/Redux/Store'
function App() {
  const [auth,setAuth]=useState(false)
  const [items,setItems]=useState([]); 
    
    const onAdd=(product)=>{
        const exist=items.find(x=>x.id === product.id);
        if(exist){
            setItems(
                items.map(x=>
                    x.id === product.id ? {...exist, qty:exist.qty+1} : x
                )
            )
        }else{
            setItems([...items,{...product,qty:1}]) 
        }
    }

    
  const loginHandler=()=>{
    setAuth(true)
  }
  const logoutHandler=()=>{
    setAuth(false)
  }
  return (
    <React.Fragment>
            <Provider store={Store}>
      
        <Router>
          <Navbar auth={auth} logoutHandler={logoutHandler}/>
          <Switch>
            <Route exact path="/mobiles" render={(props)=><Mobile {...props} onAdd={onAdd}/>} />
            <Route exact path="/watches" render={(props)=><Watches {...props} onAdd={onAdd}/>} />
            <Route exact path="/laptops" render={(props)=><Laptop {...props} onAdd={onAdd}/>} />
            <Route exact path="/upload" component={Upload} />
            <Route exact path="/login" render={(props)=><Login {...props} loginHandler={loginHandler}/>} />
            <Route exact path="/signup" component={Register} />
            <Route exact path="/checkout" component={Checkout}/>
            { auth===true?
              <Route exact path="/cart"  render={(props)=><Cart {...props} onAdd={onAdd} items={items} />} />
              :<Redirect to='/login'/>
             }
          </Switch>
        </Router>
        </Provider>
    </React.Fragment>
  );
}

export default App;