import React from "react";
import "./styles.css";
import OzoneComponent from "./ozone";
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

const menus = [
  { label: "Todo", id: 1 },
  { label: "Ozone", id: 2 }
];
export default function App() {
  const [list1, setlist1] = React.useState(todoData);
  const [currentMenu, SetCurrentMenu] = React.useState(2);
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
  const handleMenuClick = (e, a) => {
    e.preventDefault();
    SetCurrentMenu(a.id);
  };
  return (
    <div className="App">
      <div className="mainMenu">
        {menus &&
          menus.map((a) => {
            return (
              <a
                href="/"
                style={{ margin: "15px" }}
                onClick={(e) => handleMenuClick(e, a)}
              >
                {a.label}
              </a>
            );
          })}
      </div>
      {currentMenu === 1 && (
        <div className="todo">
          <h1>MY TODO</h1>
          <form style={{ margin: "5px" }} onSubmit={addNewItem}>
            add new item : <input type="text" ref={newValueRef} />
          </form>
          <div style={{ padding: "2px" }}>
            {list1 &&
              list1.map((item) => {
                return (
                  <ul key={item.id} style={{ width: "300px" }}>
                    <div
                      className="item"
                      key={item.id}
                      onClick={(e) => togglecheckbox(item)}
                    >
                      <input
                        style={{
                          "margin-ight": "2rem",
                          height: "25px",
                          width: "25px",
                          minWidth: "25px"
                        }}
                        type="checkbox"
                        checked={!!item.done}
                        onChange={() => {}}
                      />
                      <div
                        style={{
                          margin: "5px",
                          minWidth: "300px",
                          display: "inline"
                        }}
                      >
                        <span
                          style={{
                            textDecoration: !!item.done
                              ? "line-through"
                              : "none"
                          }}
                        >
                          {item.title}
                        </span>
                      </div>

                      <button
                        style={{
                          float: "right",
                          background: "orange"
                        }}
                        onClick={(e) => deleteItem(item)}
                      >
                        Del
                        {/* Del <i class="fa fa-times"></i> */}
                      </button>
                    </div>
                  </ul>
                );
              })}
          </div>
        </div>
      )}
      {currentMenu === 2 && (
        <div className="ozone">
          <h1>Ozone exercize</h1>
          <div>
            <OzoneComponent />
          </div>
        </div>
      )}
    </div>
  );
}
