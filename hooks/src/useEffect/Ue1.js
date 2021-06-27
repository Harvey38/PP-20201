// ComponentDidMount ComponentDidUpdat, ComponentWillUnmount
// useEffect provides the above functionality in functional Components

// useEffect(()=>{
    //  execute your functionality whatever it is
// },optional dependency array)

//  3 variation 

// 1 variation (componentDidMount + componentDidUpdate)

import React,{useEffect,useState} from 'react'

function Ue1() {
   
    const [count,setCount] =useState(0);
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
    })
    console.log('render');
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)} >Click Me</button>
        </div>
    )
}

export default Ue1
