import React from 'react'
import "./../assets/style.css";
import styles from "./../assets/home.module.css";
export default function Home() {
  let [count,setCount]=React.useState(0);
  // type coersion 
  // explictly 
  // undefined + 1 =Nan
  function increment(){
    setCount(count+1);
  }
  function decrement(){
    setCount(count-1);
  }
  
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <button  className='btn btn-primary' onClick={increment}>Increment </button>
          <p>{count}</p>
          <button className='btn btn-primary'  onClick={decrement}>Decrement </button>
        </div>
      </div>
    </div>
  )
}
