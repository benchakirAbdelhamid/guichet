import React, {  useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import {addToCart} from '../store/shopping-cart/cartSlice'

const DetailsEvent = () => {
  const dispatch = useDispatch();
  const param = useParams()
  const [eventBycategory , setEventBycategory ] = useState([])
  const state = useSelector((state) => state.cart.event);
  const [quantityVal, setQuantityVal] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

    useEffect(() => {
        let isCancelled = false
        if(!isCancelled){
          // console.log('state')
        }return ()=>{
          // get ticket event from initialstate redux 
          state.forEach(element => {
            if(element.id == param.idEvent){
              setEventBycategory(element)
            }else{
              // console.log('error')
            }
          });
          isCancelled = true
        }
      }, [param]);

      const handleOptionChange = (event)=>{
        setSelectedOption(event.target.value)
      }
         
      // function add to cart and add details ticket to cart
      const handleCommand = (parametre_quantityVal,parametre_selectedOption) => {
          if(Number(parametre_quantityVal) * Number(parametre_selectedOption) > 0){
            // Current date and time 
            const currentDateTime = new Date();
            const year = currentDateTime.getFullYear();
            const month = currentDateTime.getMonth() + 1;
            const day = currentDateTime.getDate();
            const hours = currentDateTime.getHours();
            const minutes = currentDateTime.getMinutes();
            const seconds = currentDateTime.getSeconds();
            // console.log(`Current date and time: ${year}-${month}-${day} ${hours}:${minutes}:${seconds}`);
      
            // Generates a random number => id_ticket_category
            let randomNumber = Math.random(Math.floor(Math.random() * Math.random())); 
            // console.log(randomNumber);

            dispatch(addToCart({
              'id_ticket_category' : randomNumber,
              'eventPackage' : Number(parametre_selectedOption) , //referenceTicketId
              'eventId':eventBycategory.id, 
              'quantityValueTicket':Number(parametre_quantityVal),
              'date':`${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
            }))
          }
        }



    return (
        <div>

            <h2>id : {eventBycategory.id}</h2>
            <h2>category : {eventBycategory.category}</h2>
            <h2>date : {eventBycategory.date}</h2>
            <h2>location : {eventBycategory.location}</h2>
            <h2>name : {eventBycategory.name}</h2>
            <h2>pric : {eventBycategory.pric}</h2>
            <h2>title : {eventBycategory.title}</h2>
            <h2>Description : {eventBycategory.Description}</h2>
            <img src={eventBycategory.imageURL} alt=''/>

            <form className='container mt-5'>
                  <legend>{eventBycategory.date}</legend>
                  <div className="mb-3 col-9 ">
                    <select className="form-select" value={selectedOption} onChange={handleOptionChange} > 
                    <option value='' key='0' disabled > chose in option </option> 
                              {
                              eventBycategory.ticket_Category !== undefined 
                              ? eventBycategory.ticket_Category.map((item_ticket_category)=>{
                                return(
                                <option value={item_ticket_category.id_ticket_Category}  key={item_ticket_category.id_ticket_Category} >
                                  category : {item_ticket_category.category_name} | price : {item_ticket_category.pric_category}
                                </option>
                                )
                              })
                              : ''
                              } 
                    </select>
                  </div>
              <input
              value={quantityVal}
              onChange={({ target }) => setQuantityVal(target.value)}
              type="number"
              className="form-control"
              />

              <button className="btn btn-primary w-100 mt-1" type="button"
              onClick={()=> handleCommand(quantityVal,selectedOption)}
              >
              Acheter maintenant
              </button>
            </form>

        </div>
    );
}

export default DetailsEvent;
