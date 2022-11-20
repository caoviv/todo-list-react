function List() {
  return (
    <>
      {todos.map((task, index) => {
        return (
          <div id={task.id} key={index + task.id} value={task.id}>
            {task.isCompleted ? (
              <strike>
                <p>{task.taskDescription}</p>
              </strike>
            ) : (
              <>
                <p>{task.taskDescription}</p>
                <button
                  id={task.id}
                  key={index + task.id}
                  value={task.id}
                  onClick={() => console.log("clicked completed")}
                >
                  complete
                </button>
              </>
            )}
          </div>
        );
      })}
    </>
  );
}

export default List;
