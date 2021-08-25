import React ,{useState,useEffect,useCallback}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { dispatchProductList } from '../Redux/action'

import { bindActionCreators } from 'redux'

let Laptop=(props)=>{
  // let dispatch=useDispatch()
  // let abc = useSelector((state) => {
  //   return state.product;
  // });

  //   const[data,setData]=useState([])
  //   const[cart,setCart]=useState(true)

  //   const pullData=async()=>{
  //       const res=await axios.get("https://api.jsonbin.io/b/6123b0802aa80036126e758a")
  //       setData(res.data)
  //       setCart(false)
  //   }

  //   useEffect(()=>{
  //     dispatch(getLaptopAction());
  //    pullData()
  //   },[dispatch])
  const productsData = useSelector((state) => state.productsReducer)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchProductList
    },
    dispatch
  )


   const getData = useCallback(async ()=>{
       const res = await axios.get('https://api.jsonbin.io/b/6123b0802aa80036126e758a') 
       actions.dispatchProductList(res.data)
   },[])

   useEffect(()=>{
       getData()
   },[getData])
    return(
        <>
        <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Laptops</h3>
            </div>
          </div>
        </div>
      </section>

        
       
        <div className="container mt-4" >
          <div className="row">
      
                    
                        {productsData.productsList.map((get,index)=>{
                         return(
                             <div key={index} className="col-lg-3 py-3 px-3">
                               <div className="card" >
                                   <div className="card-header">
                                      <img
                                      src={get.img}
                                      alt='Mobile Data'
                                       height="50%"
                                       width="50%"
                                          />
                                   </div>  

                                    <div className="card-body">
                                      <ul className="list-group">
                                       <li className="list-group-item">{get.name}</li>
                                       <li className="list-group-item">{get.price}</li>
                                        <li className="list-group-item">
                                        <Link to="/cart">
                                        <button className="btn btn-success" data-id={get.id} onClick={()=>props.onAdd(get)}>Add Cart</button>
                                        </Link>
                                       </li>
                                     </ul>
                                  </div> 
                        </div>
                        </div>
                     )
                })}
                        
                  
                </div>
              
            </div>
         
        </>
    )
}

export default Laptop 