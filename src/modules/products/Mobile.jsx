import React ,{useState,useEffect,useCallback}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import { useDispatch,useSelector } from "react-redux";
import { dispatchProductList } from '../Redux/action'

import { bindActionCreators } from 'redux'


let Mobile = (props) => {
  // const[data,setData]=useState([])
  //   const[cart,setCart]=useState(true)

  //   const pullData=async()=>{
  //       const res=await axios.get('https://api.jsonbin.io/b/611fd9adc5159b35ae016bc3')
  //       setData(res.data)
  //       setCart(false)
  //   }

  //   useEffect(()=>{
  //    pullData()
  //   },[])

  const productsData = useSelector((state) => state.productsReducer)
  const dispatch = useDispatch()
  const actions = bindActionCreators(
    {
      dispatchProductList
    },
    dispatch
  )


   const getData = useCallback(async ()=>{
       const res = await axios.get('https://api.jsonbin.io/b/6124f3cd076a223676b07660') 
       actions.dispatchProductList(res.data)
   },[])

   useEffect(()=>{
       getData()
   },[getData])


  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Mobiles</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            {/* <div className="col-lg-3"> */}
              
                {productsData.productsList.map((mob,index)=>{
                  return(
                    <div key={index } className="col-lg-3 py-3 px-3" >
                      <div className="card">
                      
                      <div className="card-header">
                        <img
                         src={mob.img}
                         alt="Oppo Mobile"
                          height="50%"
                          width="50%"
                           />
                       </div>
                         

                        <div className="card-body">
                          <ul className="list-group">
                             <li className="list-group-item">{mob.name}</li>
                             <li className="list-group-item">{mob.price}</li>
                              <li className="list-group-item">
                               <Link to="/cart">
                                        <button className="btn btn-success" data-id={mob.id} onClick={()=>props.onAdd(mob)}>Add Cart</button>
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
        {/* </div> */}
      </section>
    </React.Fragment>
  );
};
export default Mobile;