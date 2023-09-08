import React, { useEffect, useContext, useState} from 'react';
import './style.css';
import { UsersContext } from './OnlineUser';


const UserList = () => {

  const { userState, setUserState } = useContext(UsersContext); 

  //console.log(users);
  useEffect(()=>{

    const interval = setInterval(()=>{

      const users = Object.keys(userState);
      
      const randomUser = users[Math.floor(Math.random()*users.length)];
      //console.log(randomUser);
      setUserState((prevState)=>({

        ...prevState,
        [randomUser]:!prevState[randomUser],
        

      }))

      return()=>clearInterval(interval);

    }, 5000)

  },[userState]); 



  const objectKeys = Object.keys(userState);

  
  

  return (
    <div>

        {
            objectKeys.length>0 && objectKeys.map((key, value)=>{
                return(
                    <p>
                        
                        {key}
                        <button className={userState[key]?"green-circle":"red-circle"}></button>

                    </p>
                );
            })
        }


      
    </div>
  )
}

export default UserList
