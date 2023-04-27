import { useContext } from "react";
import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function NotDoneTodo() {
  const { state } = useContext(TodoContext);

  const undoneItems = state.todo.filter(({ isCompleted }) => !isCompleted);
  return (
    <>
      <h2>List of Incomplete items</h2>
      <p style={{ color: "rgb(183, 31, 36)" }}>
        Total items yet to be completed: {undoneItems.length}
      </p>
      {undoneItems.length !== 0 ? (
        undoneItems.map((item) => {
          return <TodoTile todoItem={item} />;
        })
      ) : (
        <p>All the todo items are completed</p>
      )}
    </>
  );
}

export default NotDoneTodo;
