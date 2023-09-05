import React from 'react'

const DisplayNested = ({data}) => {
return(
    <>
  {

  Object.entries(data).map(([key, value])=>{

    if(typeof value==="object"){

        return (
            <div>

                <p>{`${key}: `}</p>

                <div style={{marginLeft:"50px"}}>
                    <DisplayNested data={value}/>

                </div>
              
            </div>
          )
        
      }//if
      else{
        return <p>{`${key}: ${value}`}</p>;
      }
    
  })

  
  
} 
</> 
)

}

export default DisplayNested
