import React from 'react';
import './Cart.css';
import {Link} from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../../Features/CartSlice';
import { removeFromCart } from '../../Features/CartSlice';

function Cart(){
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const calculateTotal = () => {
        return cart.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    return(
        <>
        <div className='cart'>
            <h1 className='m-7 text-xl'>Cart</h1>
            <ul>{
                cart.map(item =>(
                    <li className='listcart'>
                        <div className='list2'>
                            <div className='cartimage'>
                                <img src={item.image} alt={item.name} />
                            </div>    
                            <p>
                                <p>{item.name}</p>
                                <p>₹{item.price}</p>
                            </p>
                            <div className='but'>
                                <button onClick={()=>dispatch(addToCart(shoe))}>+</button>
                                {item.quantity}
                                <button onClick={() => dispatch(removeFromCart(item.id))}>-</button>
                            </div>
                        </div>
                    </li>
                    
                ))
            }  
            </ul> 
            <h2 className='flex justify-center text-2xl'>Total:  ₹{calculateTotal()}</h2>
            <Link to="/payment" className="proceed-to-pay-button">
                 <button className='proceed-btn'>
                     Proceed to Pay
                 </button>
               </Link>
            
        </div>
        </>
    )
}
export default Cart;