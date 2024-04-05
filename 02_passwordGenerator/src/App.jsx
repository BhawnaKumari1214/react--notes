import { useState } from 'react';
import PasswordGen from './component/PasswordGen';

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className='h-screen'>
      <PasswordGen />
   </div>
  )
}

export default App
