import React, { useState } from 'react';

import axios from 'axios';
import GenerateActivityList from './GenerateActivityList';

const GenerateActivity = () => {
  
  const [activity, setActivity] = useState([]);


   const handleClick= async()=>{

    try{
        const res = await axios.get("https://www.boredapi.com/api/activity");
        const result = res.data;
        setActivity(prevActivity => [...prevActivity, result]);

    }catch(error){
        console.log(error);
        return
    }



    

  } 

  return (
    <div style={{margin:"auto"}}>
        <button onClick={handleClick}>Generate Activity</button>
        {
            activity.length>0 && 
            
            activity.map((key, value)=>{

                return(<div key={key}>
                    

                    
                     <GenerateActivityList task = {key}/>
                    

                </div>);

            })
            
           
            
        }

      
    </div>
  )
}

export default GenerateActivity
