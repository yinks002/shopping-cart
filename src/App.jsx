import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/navbar';
import Amazon from './components/amazon';
import Cart from './components/cart';

function App() {
  const [show,setShow] = useState(true)
  const [cart, setCart] = useState([]);

    const handleClick = (item)=>{
       if(cart.indexOf(item) !== -1)return;
       setCart([...cart, item]);
       alert("added to cart")
    }
    const handleChange = (item,id)=>{
      const ind = cart.indexOf(item);
      const arr = cart;
      arr[ind].amount += id;

      if(arr[ind].amount===0) arr[ind].amount = 1;
      setCart([...arr]);

    }

    // useEffect(()=>{
    //  alert("cart was updated")
    // },[cart])
  return (
    <React.Fragment>
      <Navbar setShow={setShow}/>

      {

      
      show? <Amazon handleClick={handleClick}/> : < Cart cart={cart} setCart={setCart} handleChange={handleChange}/>
      }
      </React.Fragment>
   
  );
}

export default App;
