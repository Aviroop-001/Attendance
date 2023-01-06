import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";

function SingleStudent({ student, studentLogoutHandler, studentDeleteHandler }) {

  return (
    <tr key={student.name}>
      <td className="px-6 py-1 text-sm text-gray-800 whitespace-nowrap">
        <div className="flex">
            <div className="text-base font-bold tracking-wide">{student.name}</div>
        </div>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700" href="#">
          {student.roll}
        </a>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="flex flex-col">
          <a className="text-gray-700 hover:text-red-700" href="#">
            {student.login.date}
          </a>
          <a className="text-gray-700 hover:text-red-700" href="#">
            {student.login.time}
          </a>
        </div>
      </td>
      <td className="px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
        <div className="flex flex-col">
          <a className="text-gray-700 hover:text-red-700" href="#">
            {student.logout.date}
          </a>
          <a className="text-gray-700 hover:text-red-700" href="#">
            {student.logout.time}
          </a>
        </div>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        <a className="hover:text-green-700 text-xl" href="#">
          <button onClick={() => studentDeleteHandler(student.id)}>
            <AiOutlineDelete />
          </button>
        </a>
      </td>
      <td className="px-6 py-1 text-sm font-medium text-right whitespace-nowrap">
        {student.logout.date==="" ? <a className="hover:text-green-700 text-xl" href="#">
        <button onClick={() => studentLogoutHandler(student.id)}>
            <FiLogOut />
        </button>
        </a>: <></>}
      </td>
    </tr>
  );
}

export default SingleStudent;
