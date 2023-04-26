import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

function TodoTile({ todoItem }) {
  const { dispatch } = useContext(TodoContext);

  const { id, title, description, isCompleted } = todoItem;

  return (
    <div
      key={id}
      style={{
        display: "inline-block",
        border: isCompleted ? "1px dashed green" : "1px dashed red",
        margin: "10px 20px ",
        padding: " 20px",
        width: "250px",
        height: "135px",
        backgroundColor: "#ecedef",
        // backgroundColor: "#c0b8b4",
        boxShadow: isCompleted
          ? "2px 4px 8px 0 rgba(30, 250, 89, 0.2)"
          : "2px 4px 8px 0 rgba(240, 7, 38, 0.2)"
      }}
    >
      <p
        style={{
          fontSize: 22,
          // color: "#333333",
          color: "#b71f24",
          fontFamily: "serif",
          fontWeight: 700,
          margin: "10px 10px 25px"
        }}
      >
        {title}
      </p>
      <p
        style={{
          fontSize: 16,
          // color: "#666666"
          color: "##020035"
        }}
      >
        {description}
      </p>
      <input
        type="checkbox"
        name="isDone"
        checked={isCompleted}
        onChange={(e) =>
          dispatch({
            type: "Toggle_Todo",
            payload: { id, completed: e.target.checked }
          })
        }
      />
      <span style={{ color: "#020035" }}>Completed</span>
    </div>
  );
}

export default TodoTile;
