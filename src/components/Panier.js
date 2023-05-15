import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCommand } from '../store/shopping-cart/cartSlice';


const Panier = () => {
    const state = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const [dataCart , setDataCart] = useState([])
    const [someQuantityValue , setsomeQuantityValue] = useState(null)
    const [totalPriceOrdersValue , setTotalPriceOrdersValue] = useState(null)

    useEffect(()=>{
                let filtred_array = [];
                // increase the quantity if event already exists
                state.cart.forEach((element) => {
                    const index = filtred_array.find(
                        ele => ele.eventId == element.eventId && ele.eventPackage == element.eventPackage 
                        ) || null;    
                        if (index) index.quatity += 1              
                        else filtred_array.push({...element, quatity: 1  })
                })

                // get information event and price ticket
                let cart_array = [];
                filtred_array.forEach((items_cart)=>{
                    // console.log(items_cart)
                    state.event.forEach(items_event => {
                        // console.log(items_cart,items_event)
                        if(Number(items_cart.eventId) === Number(items_event.id) ){
                            // console.log(items_cart,items_event)
                            items_event.ticket_Category.forEach((item_ticket_Category)=>{
                                // console.log(item_ticket_Category)
                                if( Number(items_cart.eventPackage) === Number(item_ticket_Category.id_ticket_Category) ){
                                    cart_array.push({...items_cart , 'info_event':items_event , 'category_ticket' : item_ticket_Category })
                                }
                            })
                        }
                    });
                })
                setDataCart(cart_array)
        },[state.cart])
        


    const deletecommand = (infoCommand)=>{
        // console.log(dataCart)
        dispatch(deleteCommand({
            // create id command with concate eventId and eventPackage for every event
            'id': infoCommand.eventId.concat(infoCommand.eventPackage) ,
          }))
    }

    useEffect(()=>{
        let someQuantity = 0
        let totalPriceOrders = 0
        dataCart.forEach((itemQuantity)=>{
            // itemQuantity.quatity
            someQuantity += itemQuantity.quatity
            totalPriceOrders += (itemQuantity.category_ticket.pric_category * itemQuantity.quatity)
            // console.log(itemQuantity.category_ticket.pric_category)
            // console.log(itemQuantity.quatity)
        })
        // console.log(someQuantity)
        // console.log(totalPriceOrders)
        setsomeQuantityValue(someQuantity)
        setTotalPriceOrdersValue(totalPriceOrders)
    },[dataCart])



    return (
        <div>
            <h1 className='text-center pt-5'> Mon panier</h1>
            <h1> total quantity ticket :  <span className="badge text-bg-danger">{someQuantityValue !== null ? someQuantityValue : 0 }</span></h1>
            <h1> total price : <span className="badge text-bg-danger">{totalPriceOrdersValue !== null ? totalPriceOrdersValue : 0 } MAD</span></h1>
            
                <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">img event</th>
                        <th scope="col">title</th>
                        <th scope="col">location</th>
                        <th scope="col">quatity</th>
                        <th scope="col">category ticket</th>
                        <th scope="col">price</th>
                        <th scope="col">total price</th>
                        <th scope="col">delete</th>
                      </tr>
                    </thead>
                    <tbody>
                        {
                        dataCart.length > 0
                        ? dataCart.map((itemCommand)=>{
                            return(
                                <tr key={itemCommand.id_ticket_category}> 
                                    <td><img className="rounded-circle" style={{'width':'100px'}} src={itemCommand.info_event.imageURL} alt=''/></td>
                                    <td>{itemCommand.info_event.title}</td>
                                    <td>{itemCommand.info_event.location}</td>
                                    <td>{itemCommand.quatity}</td>
                                    <td>{itemCommand.category_ticket.category_name}</td>
                                    <td>{itemCommand.category_ticket.pric_category}</td>
                                    <td>{itemCommand.quatity * itemCommand.category_ticket.pric_category}</td>
                                    <td><button onClick={()=> deletecommand(itemCommand) } type='button' className='btn btn-primary'>delete</button></td>
                                </tr>
                            )
                        })
                         : ''
                         }
                    </tbody>
                </table>
            
        </div>
    );
}

export default Panier;
