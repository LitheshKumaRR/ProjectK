import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'


let Watches = (props) => {
  const[data,setData]=useState([])
    const[cart,setCart]=useState(true)

    const pullData=async()=>{
        const res=await axios.get('./data1.json')
        setData(res.data)
        setCart(false)
    }

    useEffect(()=>{
     pullData()
    })
  return (
    <React.Fragment>
      <section className="bg-warning p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <h3>Trending Watches</h3>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-3">
              <div className="card">
              {data.map((watch,index)=>{
                  return(
                    <div key={index}>
                      <div className="card-header bg-white">
                        <img
                         src={watch.img}
                         alt="Rolex Watch"
                         height="50%"
                          width="50%"
                         />
                      </div>

                      <div className="card-body">
                          <ul className="list-group">
                            <li className="list-group-item">{watch.name}</li>
                            <li className="list-group-item">{watch.price}</li>
                           <li className="list-group-item">
                              <Link to="/cart">
                               <button className="btn btn-success" data-id={watch.id} onClick={()=>props.onAdd(watch)}>Add Cart</button>
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
  </div>
      </section>
    </React.Fragment>
  );
};
export default Watches;