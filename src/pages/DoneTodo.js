import { useContext } from "react";
import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function DoneTodo() {
  const { state } = useContext(TodoContext);

  const doneItems = state.todo.filter(({ isCompleted }) => isCompleted);
  return (
    <>
      <h2>List of Completed items</h2>
      {doneItems.length !== 0 ? (
        doneItems.map((item) => {
          return <TodoTile todoItem={item} />;
        })
      ) : (
        <p>No items are completed</p>
      )}
    </>
  );
}

export default DoneTodo;