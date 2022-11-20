import "./App.css";
import { useState } from "react";
import Checkbox from "./components/Checkbox";

function App() {
  // task variable
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false,
  });

  // add task to todos array (list)
  const [tasks, setTasks] = useState([]);

  // add task to list
  function addTasks(e) {
    // prevent form submitting twice
    e.preventDefault();
    // add task to tasks array
    setTasks([
      ...tasks,
      // update task object properties
      {
        id: tasks.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false,
      },
    ]);

    // reset form input
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false,
    });
  }

  // checkbox complete functionality
  const handleToggle = (id) => {
    // search through tasks and returning completed ones
    let mapped = tasks.map((task) => {
      return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
    });
    // setting our new todo list with updated variables
    setTasks(mapped);
  };

  const handleClick = (e) => {
    e.preventDefault();
     handleToggle(e.currentTarget.id); 
  };

  return (
    <div className="App">
      <h1>A To-do List</h1>
      <form onSubmit={addTasks}>
        <div>
          <label>
            Task
            <input
              type="text"
              value={task.taskDescription}
              name="taskDescription"
              onChange={(event) =>
                setTask({
                  taskDescription: event.target.value,
                  isCompleted: false,
                })
              }
            />
          </label>
          <button>Add Task</button>
        </div>
      </form>
      {/* display message when there are no tasks */}
      <>
        {tasks.length > 0 ? (
          <>
            {tasks.map((task, index) => {
              return (
                <div id={task.id} key={index + task.id} value={task.id}>
                  {task.isCompleted ? (
                    <strike>
                      <p>{task.taskDescription}</p>
                    </strike>
                  ) : (
                    <Checkbox
                    label={task.taskDescription}
                    value={task.id}
                    checked={task.isCompleted}
                    onChange={(event)  => handleToggle(task.id)}
                    />
                  )}
                </div>
              );
            })}
          </>
        ) : (
          <p>No tasks for today</p>
        )}
      </>
    </div>
  );
}

export default App;
