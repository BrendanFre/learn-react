import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [count, setCount] = useState(0);
  const name = "Brad";

  return (
    <div className="container">
      <Header />
      <Tasks />
    </div>
  );
}

export default App;
