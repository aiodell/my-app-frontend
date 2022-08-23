import React from "react";
import { useState } from "react";

// const Details = ({fox}) => {
//     return(
//      <div>
//          <h1>{fox.age}</h1>
//      </div>
//     ) 
// }

// console.log(Details)



// const NoDetails = ({fox}) => {
//     return(
//         <img src ={fox.image_url} alt = 'cute fox'/>
//     )
// }




function FoxCard({fox}) { 

  const [showDetails, setShowDetails] = useState(false)

  const toggleCard = () => {
    setShowDetails((previousDetails)=> !previousDetails)
  }

    return(
        <div >
            <h1>{fox.name}</h1>
            <img onClick={toggleCard} src={fox.image_url} alt="cute fox">
             {/* {showDetails ? <Details /> : "hi" } */}
            </img>
          
          
        </div>
    )
}

export default FoxCard;