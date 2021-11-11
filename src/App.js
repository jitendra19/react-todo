import React from "react";

import "./styles.css";

const todoData = [
  {
    id: "1",
    title: "abc",
    done: false
  },
  {
    id: "2",
    title: "abc",
    done: true
  },
  {
    id: "3",
    title: "abc",
    done: false
  },
  {
    id: "4",
    title: "abc",
    done: true
  }
];

export default function App() {
  const [list1, setlist1] = React.useState(todoData);
  const togglecheckbox = (item) => {
    const index = list1.findIndex((a) => a.id === item.id);
    const list2 = [...list1];
    list2[index].done = !list2[index].done;
    setlist1(list2);
  };
  return (
    <div className="App">
      <h1>MY TODO</h1>
      <div style={{ padding: "5px" }}>
        {list1 &&
          list1.length &&
          list1.map((item) => {
            return (
              <div>
                <div
                  className="item"
                  key={item.id}
                  onClick={(e) => togglecheckbox(item)}
                >
                  <input type="checkbox" checked={!!item.done} />
                  <span
                    style={{
                      textDecoration: !!item.done ? "line-through" : "none"
                    }}
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
