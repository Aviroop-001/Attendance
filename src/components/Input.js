import React from 'react'
import { userAddHandler, currentDate, currentDateTime } from '../functions';


function Input({ studentAddHandler }) {


    const submitHandler= (e) =>{
        e.preventDefault();
        const newUser = {
          name: e.target.name.value,
          roll: e.target.roll.value,
          login: {date: currentDate(), time: currentDateTime()},
          logout: {date: "", time: ""},
        };
        studentAddHandler(newUser);
        e.target.name.value = "";
        e.target.roll.value = "";
      }

  return (
    <div><form className=" flex justify-evenly bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={submitHandler}>
    <div className="mb-1">
    <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mr-2 leading-tight focus:outline-none focus:shadow-outline" placeholder='User Name' name="name"/>
    </div>
    <div className="mb-1">
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mr-2 leading-tight focus:outline-none focus:shadow-outline" placeholder='Roll no.' name='roll'/>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onSubmit={submitHandler}>
        Log Student
      </button>
    </div>
  </form>
  </div>
  )
}

export default Input