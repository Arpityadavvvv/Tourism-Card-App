import React from "react";
import { useState } from "react";



function Card ({price,id,name,info,image,unintrested})
{
    const [readmore,setReadmore] = useState(false); // yha hum r3ead more or less ke liye usestate k use krrhe hai jisse hum change krke UI pr render kra ske 

    const description = readmore ? info :`${info.substring(0,200)}....`;
    function readmoreHandler() {
        setReadmore(!readmore);
    }
 // hum pehel sirf info ke 200 character dikhana chate hai as a description and later on readmore and show less lrenge 

   

    

    return (
      
      <div className="card">

            <img src={image} className="image" height={340} width={340}></img>

            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹ {price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `Show Less`: `Read \More`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => unintrested(id)}>
                Not Interested
            </button>
        </div>
        
                          
    );
  
}

export default Card;