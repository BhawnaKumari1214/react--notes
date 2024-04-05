import React, { useCallback, useEffect, useRef, useState } from 'react'

const PasswordGen = () => {

    const [numberAllowed, setNumberAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [length, setLength] = useState(8);
    const [password, setPassword] = useState("radhikanarayana");
  
    const passwordRef = useRef(null);
  
    const passwordGen = useCallback(() => {
      let pwd = "";
      let pwdString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
      if (numberAllowed) pwdString += "0123456789";
      if (charAllowed) pwdString += '~!@#$%^&*()/|"><?;:';
  
      for (let i = 1; i <= length; i++) {
        const indexOfChar = Math.floor(Math.random() * pwdString.length + 1);
        pwd += pwdString.charAt(indexOfChar);
      }
      setPassword(pwd);
    }, [length, numberAllowed, charAllowed, setPassword]);
  
  
    const copyToClipBoard = useCallback(()=>{
      try {
        window.navigator.clipboard.writeText(password);
        passwordRef.current?.select();
        // passwordRef.current?.setSelectionRange(2,7);
      } catch (error) {
        console.log(error.message)
      }
    }, [password]);
  
  
    useEffect(() => {
      passwordGen();
    }, [numberAllowed, charAllowed, length, passwordGen]);


    return (
        <div className="flex justify-center bg-black h-full PwdSection">
          <div className="rounded-xl text-center mt-10 p-4 min-w-96 w-2/4 w- h-fit bg-zinc-700">
            <h2 className="text-white "> password generator </h2>
            <div className="inputSection flex my-3 mx-auto">
              <input
                type="text"
                placeholder="password"
                value={password}
                className="flex-1 rounded-s-md  outline-none px-2 text-emerald-700 text-lg"
                ref={passwordRef}
                readOnly
              />
              <button className="bg-blue-700 rounded-e-md px-5 py-2 text-gray-100 cursor-pointer" onClick={copyToClipBoard}>
                copy
              </button>
            </div>
    
            <div className="flex text-sm gap-x-3">
              <div className="flex items-center gap-x-1 font-semibold text-yellow-600 ">
                <input
                  type="range"
                  onChange={(e) => setLength(e.target.value)}
                  value={length}
                  min={6}
                  max={30}
                  className="cursor-pointer"
                />
                <p> Length: {length} </p>
              </div>
              <div className="flex font-semibold gap-1">
                <input
                  type="checkbox"
                  onClick={() => {
                    setNumberAllowed((prev) => !prev);
                  }}
                  defaultChecked={numberAllowed}
                  id="numberInput"
                />
                <label htmlFor="numberAllowed"> Number </label>
              </div>
              <div className="flex font-semibold gap-1">
                <input
                  type="checkbox"
                  onClick={() => {
                    setCharAllowed((prev) => !prev);
                  }}
                  defaultChecked={charAllowed}
                  id="charInput"
                />
                <label htmlFor="charAllowed"> character </label>
              </div>
            </div>
          </div>
    
          {/* pop up */}
          <div
            id="popup-modal"
            tabindex="-1"
            class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-18 h-[calc(100%-5rem)] max-h-full"
          >
            <div class="relative p-4  w-[250px] max-w-md max-h-full">
              <div class="relative text-sm bg-white rounded-lg shadow dark:bg-gray-700">
                <button
                  type="button"
                  class="absolute top-1.5 end-1.5 text-gray-400 bg-transparent hover:bg-gray-300 hover:text-gray-700 rounded-md text-sm w-6 h-6 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                >
                  <svg
                    class="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                </button>
                <div class="flex items-center gap-2 p-4 text-center">
                  <svg
                    class="h-7 w-7 p-1 text-green-700 bg-emerald-300 rounded-full "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
    
                  <p class="text-[15px] font-normal text-gray-700 ">
                    Copied !
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* end pop up */}
        </div>
      );
}

export default PasswordGen