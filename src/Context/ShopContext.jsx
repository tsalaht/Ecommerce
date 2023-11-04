import React,{createContext, useState} from 'react';
import all_product from '../Components/Assets/all_product.js';

export const ShopContext = createContext(null);
const getDefaultCard = () =>{
  let cart ={}
  for (let i=0 ; i<all_product.length + 1 ;i++){
    cart[i]=0
  }
  return cart
}
 const ShopContextProvider = (props)=>{

   const [cartItems,setCartItems]= useState(getDefaultCard)
    
    const addTocart = (itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
      console.log(cartItems)
    }
    const removeFromcart = (itemId)=>{
      setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
    const toTal = ()=>{
      let total = 0;
      for(let item in cartItems){
       if(cartItems[item]>0){
        let itemInfo = all_product.find((product)=>product.id === Number(item))
        total += itemInfo.new_price * cartItems[item]
       }
       
      }
      return total
    }
    const Cart = () =>{
     let totalItem = 0;
     for(let item in cartItems){
      if(cartItems[item]>0){
        totalItem += cartItems[item];
      }
     }
  return totalItem
    }
    const ContextValue = {all_product,cartItems,addTocart,removeFromcart,toTal,Cart};
      return(
        <ShopContext.Provider value={ContextValue}>
        {props.children}
        </ShopContext.Provider>
      )
 }
export default ShopContextProvider;