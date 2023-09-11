import React, {useState} from 'react';
import './Main.css';

const Main = () => {
  const [initialQty, setInitialQty] = useState(0);

  const decrementHandler = () => {
    if(initialQty > 0) {
      setInitialQty(initialQty - 1);
    } 
  };
  
  const incrementHandler = () => {
    setInitialQty(initialQty + 1);
  };


  return (
    <div>
      {(initialQty>0) ? <button id='decrement' onClick={decrementHandler}>-</button> : <button id='decrement' onClick={decrementHandler} disabled>-</button>}
      <input type="number" name="quantity" id="quantity" readOnly value={initialQty}/>
      <button id='increment' onClick={incrementHandler}>+</button>
    </div>
  )
}

export default Main;