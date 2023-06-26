import React from "react";


const Card = ({item,handleClick})=>{
    const {id,title,author,price,img} = item;
    return(
       <div className="cards">
        <div className="image_box">
            <img src={img} alt="" />
        </div>
        <div className="details">
            <p style={{color:"black"}}>{title}</p>
            <p>{author}</p>
            <p>${price}</p>
            <button
            onClick={()=> handleClick(item)}
            
            >
                
                Add to cart</button>
        </div>
       </div>
    )
}
export default Card;