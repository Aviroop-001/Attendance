import React, { useState, useEffect } from "react";
import { currentDate, currentDateTime } from '../functions'
import Input from "./Input";
import StudentsDisplay from "./StudentsDisplay";
import Axios from 'axios'

function Dashboard({present, setpresent }) {

    const [students, setstudents] = useState();

    useEffect(() => {
      fetchData();
    }, [])
    
    const countPresentStudents = async (data) =>{
        let n=0;
        data?.forEach(d => {
            if(d.logout.date===""){
                n++;
            }
        });
        setpresent(n);
    };

    const fetchData = async () =>{
        try {
          const res = await Axios.get("https://fake-api-51ea.onrender.com/students");
          console.log("users fetched");
          setstudents(res.data);
          countPresentStudents(res.data);
        } catch (error) {
          console.log("User fetching Error");
        }
    };

    const studentAddHandler = async (newStudent) => {
        try {
          const res = await Axios.post("https://fake-api-51ea.onrender.com/students", newStudent);
          console.log("Student Logged");
          fetchData();
        } catch (er) {
          console.log(er);
        }
      };
      
      const studentDeleteHandler = async (id) => {
        try {
          const res = await Axios.delete(`https://fake-api-51ea.onrender.com/students/${id}`)
          fetchData();
          return res;
        } catch (error) {
          console.log(error)
        }
      };
      
      const studentLogoutHandler = async (id) => {
        try {
            const update = {logout: {date: currentDate(), time: currentDateTime()}}
            const res = await Axios.patch(`https://fake-api-51ea.onrender.com/students/${id}`, update);
            fetchData();
            return res;
        } catch (error) {
          console.log(error)
        }
      };

      const userUpdateHandler = async(update) => {
        try {
          const res = await Axios.patch(`https://fake-api-51ea.onrender.com/students/${update.id}`, update);
          // alert("User edited")
          return res;
        } catch (error) {
          console.log(error)
        }
      };

  return (
    <div style={{height:'100vh'}}>
      <Input studentAddHandler={studentAddHandler}/>
      {students ? <StudentsDisplay students={students} studentLogoutHandler={studentLogoutHandler} studentDeleteHandler={studentDeleteHandler}/>
      : <p>Log students</p>}
    </div>
  );
}

export default Dashboard;
