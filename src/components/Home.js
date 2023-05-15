import  Slide  from './Slide';
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';


const Home = () => {
    const state = useSelector((state) => state.cart.event);
  

    return (

      <div>
        {/* slide image */}
        <Slide/>
        <div className='container'>
            <h2 className='text-center mb-5'>À ne pas manquer</h2>
            <div className='row'>
              {/* map all events */}
            {state.map(itemevent=>{
                return (
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
                          <NavLink className=" col btn btn-primary" to={`/products/${itemevent.name}/DetailsEvent/${itemevent.id}`}>view details</NavLink>
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


export default Home;
