import { useContext, useState, useEffect } from "react";

import { TodoContext } from "../context/TodoContext";

function UpdateTodoItems() {
  const { state, dispatch } = useContext(TodoContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  const [newIDgenerator, setNewIDgenerator] = useState(
    state.todo.length !== 0 ? state.todo[state.todo.length - 1]?.id + 1 : 1
  );

  const SubmitHandler = () => {
    setIsClicked(true);
    title &&
      description &&
      dispatch({
        type: "Add_Todo",
        payload: {
          id: newIDgenerator,
          title: title,
          description: description,
          isCompleted: false,
        },
      });
    setNewIDgenerator((prevId) => prevId + 1);
  };

  useEffect(() => {}, [state]);
  return (
    <>
      <h2>Add new Todo item</h2>
      <p>
        <label>
          Item title:{" "}
          <input
            type="text"
            name="title"
            onChange={(e) => {
              setIsClicked(false);
              setTitle(e.target.value);
            }}
            value={title}
          />
        </label>
      </p>
      <p>
        <label>
          Description:
          <input
            type="textArea"
            name="description"
            onChange={(e) => {
              setIsClicked(false);
              setDescription(e.target.value);
            }}
            value={description}
          />
        </label>
      </p>
      <p style={{ color: "red" }}>
        {isClicked && !title && !description && "Enter all the details"}
      </p>
      <p>
        <button className="addItem" onClick={() => SubmitHandler()}>
          Add Item
        </button>
      </p>
      <hr />
      <h2>Current todo list</h2>
      <p style={{ color: "rgb(183, 31, 36)" }}>
        Items present: {state.todo.length}
      </p>
      <ul>
        {state.todo.length !== 0 ? (
          state.todo.map(({ id, title }) => {
            return (
              <li key={id}>
                <button
                  class="removeButton"
                  onClick={() => dispatch({ type: "Remove_Todo", payload: id })}
                >
                  X
                </button>
                <span>{title}</span>
              </li>
            );
          })
        ) : (
          <p>No items present</p>
        )}
      </ul>
    </>
  );
}

export default UpdateTodoItems;
