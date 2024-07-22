import React, { useState } from "react";
import Slider from "../component/Slider";
import { Link } from "react-router-dom";

const Main = (props) => {
  const [value, setValue] = useState('');
  const handleSetData = () => {
    localStorage.setItem('key', value);
  };

  return (
    <>
      <main className=" w-full  min-h-screen ">
        <h3 className='text-center mx-auto w-52   dark:font-bold  rtl:bg-blue-700 rtl:text-white  '>
          {props.MainTitle}
        </h3>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <Link to="/admin/about/about" class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">About Page</Link>
          <Link to="/" class="text-sm font-semibold leading-6 text-gray-900">Learn more <span aria-hidden="true">→</span></Link>
        </div>
        <input type="text" value={value} onChange={e => setValue(e.target.value)} className="rtl:text-black"/><br/>
         <button onClick={handleSetData} className="border-2 border-red-600 m-2 rounded-md hover:bg-red-600 hover:text-white dark:bg-black dark:text-white dark:hover:border-black">Set Data to localStorage</button>
        {/* <Slider /> */}
      </main>

    </>
  );
};
export default Main;
