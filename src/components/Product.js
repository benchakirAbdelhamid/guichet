import React, { useEffect, useState } from 'react';
import {  useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import Slide from './Slide';

const Product = () => {
  const param = useParams()
    const [eventBycategory , setEventBycategory ] = useState([])
    const state = useSelector((state) => state.cart.event);

    useEffect(() => {
    setTimeout(()=>{
      // get events by category ==> arrayEventByCategoy
    let arrayEventByCategoy = []
    state.forEach(element => {
      if(String(element.category.toLowerCase()) === String(param.category.replace("-&-", " & ").toLowerCase())){
        arrayEventByCategoy.push(element)
      }else{
        // console.log('error')
      }
    });
    setEventBycategory(arrayEventByCategoy)
    },10)
    }, [param]);
    

    return (

      <div>
         <Slide/>

        <div  className='container'>
            <h2 className='text-center mb-5 mt-5'>À ne pas manquer</h2>
          <div className='row'>
          {/* map all events by category */}
          {eventBycategory.map(itemevent=>{
              return(
                    <div key={itemevent.id} className=' col-sm-10 col-md-6 col-lg-4 mb-5'>
                    <div className="card" >
                     <img src={itemevent.imageURL} className="card-img-top" alt="..."/>
                    <div className="card-body">
                    <h4> <span className="badge bg-secondary">{itemevent.category}</span> </h4> 
                     <h6 className="card-title">{itemevent.name}</h6>
                     <p className="card-text">{itemevent.location}</p>
                     <p className="card-text"> 05 j 23 h 33 m 50 s</p>
                     <div className='row'>
                     À partir de :
                     <p className=" col card-text">{itemevent.ticket_Category[2].pric_category}</p>
                     <a href="#" className=" col btn btn-primary">J'achete</a>
                     </div>
                     <NavLink className=" col btn btn-primary" to={`DetailsEvent/${itemevent.id}`}>view details</NavLink>

                    </div>
                    </div>
                    </div>       
              )
            })}
          </div>
          
          

        </div>
      </div>
    );
};



export default Product;
