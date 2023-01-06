import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

function App() {

  const [present, setpresent] = useState(0);

  return (
    <div className="App">
      <Header present={present}/>
      <Dashboard present={present} setpresent={setpresent} />
    </div>
  );
}

export default App;
