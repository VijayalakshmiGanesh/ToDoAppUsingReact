import { useContext, useEffect, useState } from "react";

import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function DoneTodo() {
  const { state } = useContext(TodoContext);

  const [doneItems, setDoneItems] = useState(
    state.todo.filter(({ isCompleted }) => isCompleted)
  );

  useEffect(() => {
    setDoneItems(() => state.todo.filter(({ isCompleted }) => isCompleted));
  }, [state]);
  return (
    <>
      <h2>List of Completed items</h2>
      <p style={{ color: "rgb(183, 31, 36)" }}>
        Total items completed: {doneItems.length}
      </p>
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
