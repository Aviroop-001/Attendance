import React, { useState } from "react";
import Pagination from "./Pagination"
import Students from "./Students";


function StudentsDisplay({ students, studentLogoutHandler, studentDeleteHandler }) {
   
  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(10);

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = students.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <div>
        <div className="flex flex-col">
          <div className="overflow-x-auto">
            <div className="p-1 w-full inline-block align-middle">
              <div className="overflow-hidden border rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-md font-bold text-left text-gray-500 uppercase "
                      >
                          Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-left text-gray-500 uppercase "
                      >
                        Roll
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Check-in
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      >
                        Check-out
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      ></th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-xs font-bold text-right text-gray-500 uppercase "
                      ></th>
                    </tr>
                  </thead>
                  <Students currentStudents={currentStudents} studentLogoutHandler={studentLogoutHandler} studentDeleteHandler={studentDeleteHandler}/>
                </table>
                <Pagination
        usersPerPage={studentsPerPage}
        totalUsers={students.length}
        paginate={paginate}
      />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentsDisplay;
