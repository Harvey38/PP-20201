import React,{useState} from 'react'

function Uswo() {
    console.log('render');
    const [msgObj,setMsgObj] =useState({message:'',id:1});
    const handleChange = (e)=>{
    //   msgObj.message = e.target.value;
    //   setMsgObj(msgObj);
    //   console.log(msgObj);
    let obj ={...msgObj,message:e.target.value}//shallow copy;
    console.log(obj);
    setMsgObj(obj);

    }

    return (
        <div>
            <input value={msgObj.message} onChange={handleChange} type='text' placeholder='Type your message'></input>
            <p>{msgObj.message}</p>
         
        </div>
    )
}

export default Uswo
