import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(-2)

  const addCount = () => {
    setCount(previousCount => (previousCount > 5) ? previousCount : (previousCount === 5) ? 5 :  previousCount + 1);
    console.log(count);
  }
  const subCount = () => {
    setCount( prevCount => (prevCount < 0) ? prevCount : (prevCount === 0) ? 0 : prevCount - 1 );
    console.log(count);
  }

  return (
    <div className='text-center'>
      <h1> counter </h1>
      <h3 className='mb-3'> count : {count} </h3>
      <button onClick={addCount} className="btn py-2 px-5 btn-dark me-2">add</button>
      <button onClick={subCount} className="btn py-2 px-5 btn-dark ">sub</button>
    </div>
  )
}


export default App
