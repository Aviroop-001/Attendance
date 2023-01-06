import React, {useState} from "react";
import SingleStudent from "./SingleStudent";

function Students({currentStudents, studentLogoutHandler, studentDeleteHandler}) {

  return (
      <tbody className="divide-y divide-gray-200">
        {currentStudents?.map((student) => (
          <SingleStudent
            key={student.id}
            student={student}
            studentLogoutHandler={studentLogoutHandler}
            studentDeleteHandler={studentDeleteHandler}
          />
        ))}
      </tbody>
  );
}

export default Students;
