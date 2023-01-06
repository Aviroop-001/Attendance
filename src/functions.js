import Axios from 'axios'

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function currentDateTime() {
  const d = new Date();
  return d.toLocaleTimeString();
}
function currentDate() {
  const d = new Date();

  let st = "";
  st += months[d.getMonth()] + " ";
  st += d.getDate().toString() + ",";
  st += d.getFullYear().toString();
  return st;
}

export {currentDate, currentDateTime}

const userUpdateHandler = async(update) => {
  try {
    const res = await Axios.patch(`https://fake-api-51ea.onrender.com/students/${update.id}`, update);
    // alert("User edited")
    return res;
  } catch (error) {
    console.log(error)
  }
};


export { userUpdateHandler}