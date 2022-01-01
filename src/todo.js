import React from "react";
const defaultList = [
  {
    id: "1",
    value: "1st item",
    done: false
  },
  {
    id: "2",
    value: "2nd item",
    done: true
  },
  {
    id: "3",
    value: "3rd item",
    done: false
  }
];

export default (props) => {
  const [tasks, setTasks] = React.useState([...defaultList]);
  let inputRef = React.useRef(null);
  const addItem = (e) => {
    if (!!inputRef.current.value) {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, value: inputRef.current.value, done: false }
      ]);
      inputRef.current.value = null;
    }
  };
  const toggleTask = (item) => {
    const tempList = [...tasks];
    tempList[tempList.findIndex((a) => a.id === item.id)].done = !item.done;
    setTasks(tempList);
  };
  return (
    <>
      <div>
        <input type="text" ref={inputRef} />
        <button onClick={addItem}>Add</button>
        <div>
          <span className="task-counter">
            {tasks.filter((a) => !a.done).length} remaining out of{" "}
            {tasks.length} tasks
          </span>
        </div>
        {tasks.map((a) => (
          <ul key={a.id}>
            <li
              onClick={(e) => toggleTask(a)}
              className={a.done ? "is-done" : ""}
            >
              {a.value}
            </li>
          </ul>
        ))}
      </div>
      <style>{`
                .is-done {
                    text-decoration: line-through;
                }
            `}</style>
    </>
  );
};
