import React, { useState } from "react";
function Hookcounter() {
 const initail = 0
 const [count, setCount] = useState(initail)
 return ( 
    <div>
      <h3 className="w-screen bg-gray-600">count : {count}</h3> 
      <button onClick={() => setCount(initail)} className="border  mt-4 p-4 text-center text-white  bg-red-900 rounded">Reset</button> 
        <button onClick={() => setCount(count+1)} className="border  mt-4 p-4 text-center text-white bg-green-900 rounded   hover:scale-150">Increament</button>
        <button onClick={() => setCount(count-1)} className="border  mt-4 p-4 text-center text-white bg-blue-900 rounded ">Decreament</button>
    </div>
 );
}
export default Hookcounter;