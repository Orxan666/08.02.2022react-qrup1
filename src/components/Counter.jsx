import React, { useState } from 'react';

const Counter = () => {
    const [count,setCount]=useState(0)
const decrease=()=>{
    setCount(count-1)
}
const increase=()=>{
    setCount(count+1)
}
  return <div>
      <h1>{count}</h1>
      <button onClick={()=>setCount(decrease)} className='btn btn-danger'>Decrease</button>
      <button onClick={()=>setCount(increase)} className='btn btn-success'>Increase</button>
  </div>;
};

export default Counter;
