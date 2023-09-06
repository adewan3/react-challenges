import React, { useState } from 'react'

const GenerateActivityList = ({task}) => {
  const [expand, setExpand] = useState(false);
  const handleClick = (e)=>{
    setExpand((prev)=>!prev);
  }  
  return (
    
    <ul>
       
        {task.activity}
        {<button onClick={handleClick} style={{margin:"10px"}}>{!expand?"Expand":"Collapse"}</button>}
    {   
    
        expand &&
        <>
        <li>type: {task.type}</li>
        <li>participants: {task.participants}</li> 
        <li>price: {task.price}</li> 
        <li>link: {task.link}</li> 
        <li>key: {task.key}</li>
        <li>accessibility: {task.accessibility}</li> 
        </>
    }
    
    </ul>
    
  )
}

export default GenerateActivityList
