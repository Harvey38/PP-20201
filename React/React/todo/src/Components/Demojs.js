import React,{useState} from 'react'

function Demojs() {
    //count ki sstate bnani h
    const [count,setCount] =useState(0);
    // const [ex,setEx] = useState('abcd');
    // name of the state
    // function that will be used to change the state
    // initial value of your state

    const handleIncrement = (str)=>{
        console.log(str);
        setCount(count+1);
    }
    const handleDecrement =function(){
        setCount(count-1)
    }

    return (
        <div>
           <h1>{count}</h1>
           <button onClick={function(){handleIncrement('bogus')}} >+</button>
           <button onClick={handleDecrement} >-</button>
        </div>
    )
}

export default Demojs
