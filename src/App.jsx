import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Get ready",
      day: "2nd April 2023",
      reminder: true,
    },
    {
      id: 2,
      text: "Shopping",
      day: "2nd March 2023",
      reminder: false,
    },
    {
      id: 3,
      text: "Party",
      day: "1st June 2023",
      reminder: true,
    },
  ]);

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
