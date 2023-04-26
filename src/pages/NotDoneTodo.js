import { useContext } from "react";
import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function NotDoneTodo() {
  const { state } = useContext(TodoContext);

  const undoneItems = state.todo.filter(({ isCompleted }) => !isCompleted);
  return (
    <>
      <h2>List of Incomplete items</h2>
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
