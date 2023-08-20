import React from 'react'
import "./Checkout.css"
import Subtotal from './Subtotal';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Checkout(){
    const[{basket}, dispatch] = useStateValue();
    console.log("Current items in the basket:", basket);
    return (
    <div  className = "checkout">
     <div className="checkoout__left">
        <img className="checkout__ad"
        src = "https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423402668_.jpg"
        alt = ""
        />
        <div>
            <h2
                className = "checkout__title">Your shopping Basket
            </h2>

            {basket.map(item =>(
                <CheckoutProduct
                id = {item.id}
                title = {item.title}
                image = {item.image}
                price = {item.price}
                rating = {item.rating}
                /> 
                
            ))}
            
            </div>    
            </div>  

     
        <div className = "checkout__right">
         <Subtotal/>
        </div>
        </div>
         
    );
}
export  default Checkout