import React, { Fragment } from "react";
import "./styles.css";

export default ({ item, deleteItem, togglecheckbox }) => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
