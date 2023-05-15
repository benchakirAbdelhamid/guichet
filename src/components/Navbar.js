import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const [toggle , setToggle] = useState(false)

  const state = useSelector((state) => state.cart.category);

  useEffect(()=>{
    let isCancelled = false
    if(!isCancelled){
      // console.log('state')
    }
    return ()=>{
      // console.log(state)
      // state.map(x=>{
      //   console.log(x.title)
      // })
      isCancelled = true
    }
  },[toggle])


    return (
        <div>

<nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <span className="navbar-brand">  <NavLink  to="/">Home</NavLink> </span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">

      {state.map(item=>{
              return (
                <li className="nav-item"  key={item.id} >
                  <span className="nav-link" >
                  <NavLink  to={`products/${item.name}`}>{item.title}</NavLink>
                  </span>
              
                </li>
                
              )
            })}
      </ul>
    </div>
<NavLink  to={`/Panier`}>Panier</NavLink>
  </div>
</nav>


 


        </div>
    );
};



export default Navbar;
