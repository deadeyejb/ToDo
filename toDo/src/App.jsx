import { useState } from "react";
import Task from "./components/ToDo";
import ToDo from "./components/ToDo";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ToDo />
    </>
  );
}

export default App;
