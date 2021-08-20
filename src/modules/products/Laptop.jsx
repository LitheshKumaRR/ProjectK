import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './style.css'

let Laptop=(props)=>{
    const[data,setData]=useState([])
    const[cart,setCart]=useState(true)

    const pullData=async()=>{
        const res=await axios.get('./data.json')
        setData(res.data)
        setCart(false)
    }

    useEffect(()=>{
     pullData()
    })
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

        
        <div className="container" >
            <div className="row">
                <div className="col"></div>
            </div>
        </div>
        <div className="container mt-3" >
            
                <div className="col-md-4" >
                    <div className="card" >
                        {data.map((get,index)=>{
                         return(
                             <div key={index}>
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
                     )
                })}
                        
                    </div>
                </div>
            </div>
         
        </>
    )
}

export default Laptop 