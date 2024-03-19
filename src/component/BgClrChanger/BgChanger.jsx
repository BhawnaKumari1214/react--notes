import React, { useState } from 'react'
import colors from './colors';
import './style.css';

const BgChanger = () => {
    const [bgClr, setBgClr] = useState('2');
  return (
    <div className={`py-3  h-full w-full relative `} style={{backgroundColor: `${bgClr}` }}>
        <div className="absolute w-full bg-slate-50 flex flex-wrap bottom-10 px-6 py-4 rounded-2xl  ">
            {/* {bgClr} */}
            {
                colors.map((clr) => {
                    // console.log(clr)
                    return (
                        <p onClick={()=>setBgClr(clr)} className='flex-auto text-center px-4 py-4' style={{backgroundColor: `${clr}`}}>
                            <span className='bg-slate-50 text-lg font-semibold px-1 py-1'> {clr} </span>
                        </p>
                    )
                })
            }
            {/* <p className='bg-green-900'> green</p> */}
        </div>
    </div>
  )
}

export default BgChanger