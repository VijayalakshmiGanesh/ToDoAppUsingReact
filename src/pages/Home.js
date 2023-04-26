import { useContext } from "react";
import TodoTile from "../components/TodoTile";
import { TodoContext } from "../context/TodoContext";

function Home() {
  const { state } = useContext(TodoContext);
  console.log(state);
  return (
    <>
      <h2>List of Todos</h2>
      {state.todo.map((item) => {
        return <TodoTile todoItem={item} />;
      })}
    </>
  );
}

export default Home;
