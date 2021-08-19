import React from 'react'
import {Link} from 'react-router-dom'

function Cart(props) {
  const {items}=props
  return (
    <React.Fragment>
      <h1>Items Added to the cart</h1>
      {
        items.map((items)=>(
          <div key={items.id}>
            <img src={items.img} alt="" />
            <h2>{items.name}</h2>
            <h1>{items.price}</h1>
          </div>
        ))
      }
      <Link to="./Checkout">
        <button className="btn btn-success">Checkout </button>
        </Link>
      
    </React.Fragment>
  )
}

export default Cart
