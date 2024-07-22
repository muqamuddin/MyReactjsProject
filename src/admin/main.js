import React, { useState } from "react";

import '../layouts/test.css';
import Hookcounter from "./HookCounter";
const Main = () => {
  const addres = "google.com";
  return (
         
<div className="grid lg:grid-cols-3 " >
<div className="flex justify-center p-40 bg-gray-400 col-span-1">
    <div className="bg-red-500 h-20 w-40 mr-2  rounded overflow-hidden shadow-2xl p-4"></div>
    <div className="bg-blue-500 h-40 w-40 mr-2"></div>
    <div className="bg-green-500 h-80 w-40 mr-2">
  </div>
</div>
<div className=" col-span-2">
<Hookcounter /> 
    <div className=" mt-8 grid lg:grid-cols-3 gap-10  border-10">
        <img className="w-screen h-64 ml-20 mr-20 object-cover border-2 shadow-md hover:scale-105 hover:border-4 hover:rounded-lg hover:shadow-xl" src="/file/BB-LORAF-0001-1.webp" alt="Image"/>
        <img className="w-screen h-64 ml-20 mr-20 object-cover border-2 shadow-md " src="/file/BB-LORAF-0001-1.webp" alt="Image"/>
        <img className="w-screen h-64 ml-20 mr-20 object-cover border-2 shadow-md " src="/file/BB-LORAF-0001-1.webp" alt="Image"/>
     </div>
     <p>{addres}</p>
     <h4 className=" w-screen absolute ml-20 border bg-gray-400 rounded py-2 px-4 uppercase">price</h4>
     </div>
  
    </div>
        
        );
        }
export default Main;


