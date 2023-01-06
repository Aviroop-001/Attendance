import React from "react";
import Input from "./Input";
import {studentAddHandler} from './Dashboard'

function Header({present}) {
  return (
    <div className="header flex sticky top-2 h-20 min-h-full">
      <div className="text-2xl font-bold px-10 py-1">Attendance</div>
      <div>
      <div className="bg-green-900 rounded-full text-3xl text-gray-100 flex justify-center align-center text-center font-medium px-3.5 py-1">{present}</div>
      students present
      </div>
    </div>
  );
}

export default Header;
