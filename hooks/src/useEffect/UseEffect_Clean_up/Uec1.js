import React,{useEffect,useState} from 'react'

function Uec1() {
   
    const [count,setCount] =useState(0);
    useEffect(()=>{
        console.log('useEffect');
        document.title = `Clicked ${count} times`;
        return ()=>{
            alert('I will be called before the next time useEffect is called'+count)
        }
    },[])
    console.log('render');
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)} >Click Me</button>
        </div>
    )
}

export default Uec1
