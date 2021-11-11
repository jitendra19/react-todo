import React, { Fragment } from "react";
import "./styles.css";
import TodoItem from "./TodoItem";
const todoData = [
  {
    id: "1",
    title: "jiten",
    done: false
  },
  {
    id: "2",
    title: "pinku",
    done: true
  },
  {
    id: "3",
    title: "JP",
    done: false
  },
  {
    id: "4",
    title: "PJ",
    done: true
  }
];
export default function App() {
  const [list1, setlist1] = React.useState(todoData);
  const newValueRef = React.useRef(null);
  const togglecheckbox = (item) => {
    const index = list1.findIndex((a) => a.id === item.id);
    const list2 = [...list1];
    list2[index].done = !list2[index].done;
    setlist1(list2);
  };
  const deleteItem = (item) => {
    const index = list1.findIndex((a) => a.id === item.id);
    const list2 = [...list1];
    list2.splice(index, 1);
    setlist1(list2);
  };
  const addNewItem = (e) => {
    const obj = {
      id: list1.length + 1,
      title: newValueRef.current.value,
      done: false
    };
    setlist1([obj, ...list1]);
    newValueRef.current.value = null;
    e.preventDefault();
  };
  return (
    <Fragment>
      <div className="App">
        <h1>MY TODO</h1>
        <form style={{ margin: "5px" }} onSubmit={addNewItem}>
          add new item : <input type="text" ref={newValueRef} />
        </form>
        <div style={{ padding: "5px" }}>
          {list1 &&
            list1.map((item) => (
              <TodoItem
                item={item}
                deleteItem={deleteItem}
                togglecheckbox={togglecheckbox}
              />
            ))}
        </div>
      </div>
      <br />
    </Fragment>
  );
}
