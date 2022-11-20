import "./App.css";
import { useState } from "react";

function App() {
  const [task, setTask] = useState ({
    id: 0,
    taskDescription: "",
    isCompleted: false
  });
  return (
    <div className="App">
      <h1>A To-do List</h1>
      <form>
        <div>
          <label>
            Task
            <input
              type="text"
              value={task.taskDescription}
              name="taskDescription"
              onChange={(event) => setTask({ taskDescription: event.target.value, isCompleted: false})}
            />
          </label>
          <button>Add Task</button>
        </div>
      </form>
    </div>
  );
}

export default App;
