import { useState } from 'react';
import './App.css'
import Card from './component/Card/Card';
import data from './data/data';
import BgChanger from './component/BgClrChanger/BgChanger';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='App flex flex-col' style={{height: '100vh'}}>
      <h1 className='flex-none bg-pink-400 text-slate-900 font-bold text-3xl text-center py-4 mb-5'> radhikanarayana </h1>
      <div className="body flex-1 w-full " style={{width: '100%'}}>
        {/* {
          data.map((item, index)=>{
            return <Card item={item} />
          })
        } */}
      
       <BgChanger />

      </div>
    </div>
  )
}

export default App
