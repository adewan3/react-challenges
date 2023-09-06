import React, { useState } from 'react';
import '../styles/robot.css';

const RobotList = () => {
  const [text, setText] = useState("");  
  const [imageList, setImageList] = useState([]);
  
  const handleChange = (e)=>{
    setText(e.target.value);
  }

  const handleClick = ()=>{
    if(text!==""){
        var txt = "https://robohash.org/"+text;
        setImageList([...imageList,{url:txt}]);
        setText("");

        
    }
  }

  const handleDel = (e) =>{
    //console.log(e.target.src);
    const updated_list = imageList.filter((key, value)=>{
      // console.log(key);

      return key.url!==e.target.src


    })

    setImageList(updated_list);

  }


  return (
    <div>
       <div className='inputBox'> 
        <input type='text' value={text} onChange={handleChange}/>
        <button onClick={handleClick}>Enter</button>
      </div>
      <div className='conatiner'>
      {
        imageList.length!==0 && (
            imageList.map((key,value)=>{
                return(<img src={key.url} key={key.url} onClick={handleDel} alt='pic' id='1'/>);
            })
        ) 
      }
      </div>
    </div>
  )
}

export default RobotList
