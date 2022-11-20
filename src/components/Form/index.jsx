function Form() {
  //   task object
  const [task, setTask] = useState({
    id: 0,
    taskDescription: "",
    isCompleted: false,
  });
  //   add task to todos array (list)
  const [todos, setTodos] = useState([]);
  function addTodos(e) {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        taskDescription: task.taskDescription,
        isCompleted: false,
      },
    ]);
    setTask({
      id: 0,
      taskDescription: "",
      isCompleted: false,
    });
  }
  return (
    <form onSubmit={addTodos}>
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
    </form>
  );
}

export default Form;
