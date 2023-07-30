import React from 'react'
import './Home.css'
import Product from './Product';
function Home() {
  return (
    <div className = "home">
      <div className= "home__container">
        <img 
        className="home__image"
        src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt = ""
        />

         <div className= "home__row">
         <Product title = "The lean startup" price = {29.99} image ="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating ={5}/>
        
            </div>
                
            <div className= "home__row">
            <Product id = "12113" title = "Chefman Air Fryer"
            price = {139.99} rating = {5} image ="https://m.media-amazon.com/images/I/51Jz1Lndr3L._AC_SY200_.jpg"/>
          <Product id = "12113" title = "GTRACING Gaming Chair, Computer Chair with Footrest and Lumbar Support, Height Adjustable Gaming Chair with 360°-Swivel Seat and Headrest for Office or Gaming (Black)"
            price = {299.99} rating = {4} image ="https://m.media-amazon.com/images/I/61Pe+85uIuL._AC_SX425_.jpg"/>
            <Product id = "12113" title = "Fanny Packs for Women Small"
            price = {31.99} rating = {4} image ="https://m.media-amazon.com/images/I/41ciXRUGhDL._AC_SR400,600_.jpg"/>
            
            </div>

            <div className= "home__row">
            <Product id = "12113" title = "Govee AI Gaming Sync Box Kit, with Light Bars and Monitor Back Light, RGBIC LED Light Strip for 27-34 inch Monitors, HDMI 4K Gaming Box Works with Alexa, Google Assistant, and CEC, 3 HDMI in 1 Out"
            price = {239.0} rating = {4} image ="https://m.media-amazon.com/images/I/715JQQNxkfL._AC_SX342_.jpg"/>
            <Product id = "12113" title = "LODVIE Wireless Mouse for Laptop, 2400 DPI Wireless Computer Mouse with 6 Buttons, 2.4G Ergonomic USB Cordless Mouse, 15 Months Battery Life Mouse for Laptop PC Mac Computer Chromebook MacBook- Gray"
            price = {239.0} rating = {4} image ="https://m.media-amazon.com/images/I/61n37S1K1KL._AC_SY355_.jpg"/>
            </div>
      </div>
    </div>
  );
}

export default Home
