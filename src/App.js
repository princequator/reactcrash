import { Header } from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from 'react';
import { FaSmileWink } from 'react-icons/fa';
//import Nav from "./components/Nav";
//import React from "react";

// Funtion Component
function App() {
  // const name = "Prince";
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "dosctor's appointment",
      day: 'wednesday',
      reminder: true
    }, {
      id: 2,
      text: "School Meeting",
      day: 'Monday',
      reminder: true
    }, {
      id: 3,
      text: "Food Shopping",
      day: 'Saturday',
      reminder: false
    }
  ])

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id))
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
  }

  return (
    <div className="container">
      {/* <Nav /> */}
      <Header title="Sharma" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : <p>No More tasks <FaSmileWink /></p>}

    </div>
  );
}

// class App extends React.Component {
//   render (){
//     return <div>Class Component</div>
//   }
// }

export default App;
