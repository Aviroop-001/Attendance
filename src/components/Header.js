import React from "react";

function Header({present}) {
  return (
    <div className="header flex">
      <div className="text-2xl font-bold px-10 py-1">Attendance</div>
      {present}
    </div>
  );
}

export default Header;
