import React, { useEffect } from 'react';
import { useState, createContext } from 'react';
import UserList from './UserList';



export const UsersContext = createContext();

const OnlineUser = () => {
    const [userState, setUserState] = useState({
        Bob: true,
        Gary: true,
        Jessica: true,
        Sam: false,
        Eric: true,
      });
    
    
  
  
  return (

      <UsersContext.Provider value={{userState, setUserState}}>

        <UserList users = {userState}/>

      </UsersContext.Provider>
        
      
    
  )
}

export default OnlineUser
