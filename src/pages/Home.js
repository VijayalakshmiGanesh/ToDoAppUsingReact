import { useContext } from "react";
import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function Home() {
  const { state } = useContext(TodoContext);

  return (
    <>
      <h2>List of Todos</h2>
      {state.todo.length !== 0 ? (
        state.todo.map((item) => {
          return <TodoTile todoItem={item} />;
        })
      ) : (
        <p>No items present.</p>
      )}
    </>
  );
}

export default Home;
