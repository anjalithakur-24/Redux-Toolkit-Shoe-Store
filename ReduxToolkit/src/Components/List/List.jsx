import React from "react";
import './List.css'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Features/CartSlice'
function ShoeList() {
  const dispatch = useDispatch();
  const shoes = [
   {id:1,image:'./image1.jpeg',name:'Puma',price:2500},
    {id:2,image:'./image2.jpeg',name:'RedTape',price:1200},
    {id:3,image:'./image3.jpeg',name:'Jordan',price:1500},
    {id:4,image:'./image4.jpeg',name:'Adidas',price:700},
    {id:5,image:'./image5.jpeg',name:'Campus',price:900},
    {id:6,image:'./image6.jpeg',name:'Nike',price:1900},
  ]
  return (
   <>
      <div className="left ">
            {
              shoes.map(shoe=>(
                <div key={shoe.id} className="items">
                  <img id="image" src={shoe.image} alt={shoe.name} />
                  <h3 id="naam">{shoe.name}</h3>
                  <p id="price">₹{shoe.price}</p>
                  <button id="add" onClick={() => dispatch(addToCart(shoe))}>Add To Cart</button>
                </div>
              ))
            }
      </div>
   </>
  );
}

export default ShoeList;