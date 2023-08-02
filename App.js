
import React from "react";
import Tours from "./components/Tours";
import data from "./data";
import Card from "./components/Card";
import { useState } from "react";



const App = () => {

  const[tours,SetTour] = useState(data);   // use state ka use yha pr cards ke data ke liye kiya gya hai jisko intialise data se kiya hai
  
  function unintrested(id)
  {
   const  newTours = tours.filter(tour => tour.id !== id);
    SetTour(newTours);
    console.log(newTours);
  }

  if(tours.length === 0)
  {
    return (
      <div className="refresh-container">
      <div className="refresh-heading "> No timee uhh ??? </div>
      <button onClick={()=> SetTour(data)} className="btn-refresh">
         Refresh 
      </button>
      </div>
    )
  }
  return (
    <div className="App">
     {/* we will create one main heading and that tours section  */}

      <Tours tours={tours} unintrested={unintrested}> </Tours>
    </div>
  );
}


export default App;


